const { REDIS_DB_SETTINGS } = require('../../utils/constants');

const redis = require('@condor-labs/redis')(REDIS_DB_SETTINGS);

let clientRedis = null;

const redisHelper = {
  connect: async () => {
    clientRedis = await redis.getClient();
    return clientRedis;
  },
  close: async () => {
    return clientRedis.quit();
  },
  getRedis: async (key) => {
    clientRedis = await redis.getClient();
    clientRedis.get(key, function (err, data) {
      if (err) {
        throw err;
      }
      return data;
    });
  },
};
module.exports = redisHelper;
