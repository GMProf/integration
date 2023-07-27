const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ "accessToken": "pat-na1-71d97fe1-fceb-4191-8141-29215bbc498d" })

const hubSpotClient = function (properties) {
    const SimplePublicObjectInputForCreate = properties;
    hubspotClient.crm.contacts.batchApi.create(SimplePublicObjectInputForCreate)
    .then(function (apiResponse) {
        console.log(JSON.stringify(apiResponse, null, 2))
    })
    .catch(function (e) {
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    });
}

module.exports = { hubSpotClient }