const express = require("express")
const { getValuesGoogleSheet } = require("../sheets/index")
const { hubSpotClient } = require("../hubspot/index")
const { getContactHubSpot } = require("../hubspot/list")
const app = express()
const invalidEmailList = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "globo.com"]

function validateEmail(dataValues) { // Uma função para verificar a lista de emails invalidos
    const invalidEmail = invalidEmailList.find((el) => {
        const arrEmail = dataValues[2].split("@")
        return arrEmail[1] == el
    })
    return invalidEmail
}

function createProperties(dataValues) {
    const properties = []
    for (i = 1; i < dataValues.length; i++) {
        if (validateEmail(dataValues[i])) continue
        properties.push(
            {
                "properties": {
                    "company": dataValues[i][0] || '',
                    "email": dataValues[i][2] || '',
                    "firstname": dataValues[i][1] || '',
                    "lastname": dataValues[i][1] || '',
                    "phone": dataValues[i][3] || '',
                    "website": dataValues[i][4] || ''
                },
                "associations": []
            }
        )
    }
    return properties
}

function mountItemsToSave(listData, properties) {
    const propertiesCreate = [...properties]
    properties.map((line) => {
        listData.results.map((result) => {
            if (line.properties.email == result.properties.email) {
                propertiesCreate.splice(propertiesCreate.findIndex((l) => l.properties.email == line.properties.email), 1);
            }
        })
    })
    return propertiesCreate
}

app.get("/get-rows", async (req, res) => { //criando o getrows para buscar as linhas da tabela
    const dataValues = await getValuesGoogleSheet()
    const properties = createProperties(dataValues)
    const listData = await getContactHubSpot()
    hubSpotClient({ inputs: mountItemsToSave(listData, properties) })
    res.send(200)
})

app.get("/hubspot", async (req, res) => {
    const data = getContactHubSpot()
    res.json({ data })
})

app.get("/sheets", async (req, res) => {
    const data = getValuesGoogleSheet()
    res.json({ data })
})

app.listen(3001, () => console.log("Rodando na porta 3001"))