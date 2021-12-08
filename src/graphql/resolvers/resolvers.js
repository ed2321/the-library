const { createBook, updateBook, deleteBook, listBooks, listBookById } = require('../../controllers/bookControllers');

module.exports = {
  hello: () => {
    return 'Hello world!';
  },
  async createBook({ input }) {
    const newBook = await createBook(input);
    return newBook;
  },
  async listBooks() {
    const data = await listBooks();
    return data;
  },
  async updateBook({ _id, input }) {
    const data = await updateBook(_id, input);
    return data;
  },
  async deleteBook({ _id }) {
    const data = await deleteBook(_id);
    return data;
  },
  async listBookById({ _id }) {
    const data = await listBookById(_id);
    return data;
  },
};
