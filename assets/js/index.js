import createNavbarLinks from './modules/navbarLinks.js';
import newBook from './modules/class.js';
import bookList, { displayAddBook, addButton } from './modules/elements.js';
import addEventBook from './modules/addBook.js';
import setDate from './modules/dateTime.js';

bookList.style.display = 'block';
displayAddBook.style.display = 'none';
// display all books by default
newBook.displaylist();

addButton.addEventListener('click', addEventBook);
setDate();

// crea nav bar links//
createNavbarLinks();
