import { formTitle, formAuthor } from './elements.js';
import newBook from './class.js';

const addEventBook = (e) => {
  e.preventDefault();
  newBook.addBook(formTitle.value, formAuthor.value);
  formTitle.value = '';
  formAuthor.value = '';
  window.location.reload();
};
export default addEventBook;