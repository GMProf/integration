const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ "accessToken": "pat-na1-71d97fe1-fceb-4191-8141-29215bbc498d" })
const limit = 100;
const after = undefined;
const properties = undefined;
const propertiesWithHistory = undefined;
const associations = undefined;
const archived = false;

const getContactHubSpot = async function () {
    return await hubspotClient.crm.contacts.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived)
}

module.exports = { getContactHubSpot }