const mongodb = require('@condor-labs/mongodb')();
const { clients } = require('../databases/mongo/mongoHelper');
const { CONNECTION_NAMES } = require('../utils/constants');
const dbConnection = clients[CONNECTION_NAMES.DEFAULT_DB];

const schemaDefinition = {
  title: { type: String },
  author: { type: String },
  pages: { type: Number },
  status: { type: String },
};

const bookSchema = new mongodb.mongoose.Schema(schemaDefinition, {
  timestamps: {
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  },
  versionKey: false,
});
const bookModel = dbConnection.model('Book', bookSchema);

module.exports = bookModel;
