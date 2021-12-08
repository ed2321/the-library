const APPLICATION_NAME = 'the-library_api';

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_REPLICASET,
  MONGO_SSL,
  MONGO_AUTH_SOURCE,
  MONGO_DEFAULT_DATABASE,
  REDIS_PREFIX,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
} = process.env;

const MONGO_DB_SETTINGS = [
  {
    connectionName: 'connection_mongo_1',
    database: MONGO_DEFAULT_DATABASE,
    host: MONGO_HOST,
    port: MONGO_PORT,
    user: MONGO_USER,
    password: MONGO_PASSWORD,
    replicaSet: MONGO_REPLICASET,
    ssl: !!MONGO_SSL,
    authSource: MONGO_AUTH_SOURCE,
  },
];

const CONNECTION_NAMES = {
  DEFAULT_DB: MONGO_DB_SETTINGS[0].connectionName,
};

const REDIS_DB_SETTINGS = {
  prefix: REDIS_PREFIX,
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};

module.exports = {
  MONGO_DB_SETTINGS,
  APPLICATION_NAME,
  REDIS_DB_SETTINGS,
  CONNECTION_NAMES,
};
