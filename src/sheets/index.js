const { google } = require("googleapis") //importando o google api

const getAuthSheets =  function() { //criando uma função assincrona para autenticação do Google Sheets
    const auth = new google.auth.GoogleAuth({
        keyFilename: './src/sheets/credentials.json', //chamando o arquivo .json baixado do Google sheets api
        scopes: 'https://www.googleapis.com/auth/spreadsheets' //url do google api - Spread Sheets
    })
    const client = auth.getClient()
    const googleSheets = google.sheets({ //indicando a versão do Sheets e o tipo de autenticação
        version: "v4",
        auth: client,
    })
    const spreadsheetId = "14keJHdZNRUIFDfsbCdmdMsWte98cSEqxaFhthAWpzi4" //ID da planilha utilizada
    return {
        auth,
        client,
        googleSheets,
        spreadsheetId,
    }
}

const getValuesGoogleSheet = async function() {
    const { googleSheets, auth, spreadsheetId } = getAuthSheets()
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Página1", //arquivo específico da planilha
    })
    return getRows.data.values
}

module.exports = { getValuesGoogleSheet }