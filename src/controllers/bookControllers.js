const createBook = async (book) => {
  const bookModel = require('../models/book');
  const newBook = new bookModel(book);
  await newBook.save();
  return newBook;
};
async function updateBook(_id, book) {
  const bookModel = require('../models/book');
  const data = await bookModel.findByIdAndUpdate(_id, book, { new: true });
  return data;
}
async function deleteBook(_id) {
  const bookModel = require('../models/book');
  const data = await bookModel.findByIdAndDelete(_id);
  return data;
}
async function listBooks() {
  //paginar
  const bookModel = require('../models/book');
  const data = await bookModel.find({});
  return data;
}
async function listBookById(_id) {
  const bookModel = require('../models/book');
  const data = await bookModel.findOne({ _id: _id });
  return data;
}

module.exports = { createBook, updateBook, deleteBook, listBooks, listBookById };
