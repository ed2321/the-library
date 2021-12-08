const { MONGO_DB_SETTINGS } = require('../../utils/constants');
const mongo = require('@condor-labs/mongodb')(MONGO_DB_SETTINGS);

const helper = {
  clients: {},
  isConnected: (connectionName) => {
    return mongo._isConnected(connectionName);
  },
  connect: async () => {
    for (const item of MONGO_DB_SETTINGS) {
      // eslint-disable-next-line no-await-in-loop
      const client = await mongo.getClient(item.connectionName);
      helper.clients[item.connectionName] = client;
    }
  },
};

module.exports = helper;
