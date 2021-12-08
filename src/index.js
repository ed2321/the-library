require('dotenv').config();
const express = require('express');
const logger = require('@condor-labs/logger');
const { healthMonitor } = require('@condor-labs/health-middleware');
const { connect } = require('./databases/mongo/mongoHelper');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schemas/schema');
const rootValue = require('./graphql/resolvers/resolvers');
const { NODE_ENV, HOST, PORT } = process.env;

const app = express();
connect();
healthMonitor(app);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);

app.get('/', function (_req, res) {
  res.send('Hello, welcome to the api library.');
});

app.use(async (error, req, res, next) => {
  logger.error(
    JSON.stringify({
      method: req.method,
      url: req.url,
      error: {
        message: error.message,
        stack: error.stack,
      },
      params: req.params,
      headers: req.headers,
      querys: req.query,
    })
  );
  try {
    return res.status(500).send({ errors: [{ message: error.message }] });
  } catch (error) {
    return next(error);
  }
});

app.listen(PORT, HOST);

logger.log(`Running ${NODE_ENV} environment on http://${HOST}:${PORT}`);

module.exports = app;
