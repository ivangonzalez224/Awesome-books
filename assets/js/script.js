let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#display-list');
const displayAddBook = document.getElementById('add-book-div');
const topNavBtnLinksUl = document.querySelector('.top_nav_btnLinksUl');
const middleSection = document.querySelectorAll('.hidden');

const bookTitle = document.querySelector('.book-title');
bookList.style.display = 'block';
displayAddBook.style.display = 'none';

const navBarBtnsId = ['List', 'Add new', 'Contact'];
const titlesSection = ['All awesome books', 'Add a new book', 'Contact information'];

class Book {
  constructor() {
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
  }

  addBook(title, author) {
    if (title !== '' && author !== '') {
      const book = {
        id: books.length + 1,
        title,
        author,
      };

      books.push(book);
      localStorage.setItem('bookData', JSON.stringify(books));
      this.displaylist();
    }
  }

  removeBook(id) {
    let bookData = JSON.parse(localStorage.getItem('bookData'));
    bookData = bookData.filter((local) => local.id !== parseInt(id, 10));
    books = bookData;
    localStorage.setItem('bookData', JSON.stringify(books));
    this.displaylist();
  }

  displaylist() {
    books.forEach((book) => {
      const bookCard = document.createElement('li');
      const removeButton = document.createElement('button');

      bookCard.innerHTML += `    
      <p class="my-title-container">'${book.title}' by ${book.author}</p> 
        `;
      bookCard.id = `data-${book.id}`;
      bookCard.className = 'display_bookInfo';
      removeButton.textContent = 'Remove';
      removeButton.className = 'display_removeBtn';
      removeButton.dataset.id = book.id;
      removeButton.addEventListener('click', (e) => {
        const { id } = e.target.dataset;
        this.removeBook(id);
        const bookEl = document.getElementById(`data-${book.id}`);
        bookList.removeChild(bookEl);
        window.location.reload();
      });
      bookCard.appendChild(removeButton);
      bookCard.classList.add('book-stack');
      bookList.appendChild(bookCard);
    });
  }
}
const newBook = new Book();
newBook.displaylist();

// display all books by default

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook.addBook(formTitle.value, formAuthor.value);

  formTitle.value = '';
  formAuthor.value = '';
  window.location.reload();
});

const date = document.getElementById('date');
let dateTime = new Date();
dateTime = dateTime.toUTCString();
date.innerHTML = `<small>${dateTime}</small>`;

// crea nav bar links//
for (let i = 0; i < navBarBtnsId.length; i += 1) {
  const navBarList = document.createElement('li');
  const navBarLink = document.createElement('a');
  navBarLink.id = navBarBtnsId[i];
  navBarLink.className = 'topNav_listLink';
  navBarLink.innerHTML = navBarBtnsId[i];
  topNavBtnLinksUl.appendChild(navBarList);
  navBarList.appendChild(navBarLink);
  navBarLink.addEventListener('click', () => {
    const indexNavLink = navBarBtnsId.indexOf(navBarLink.id);
    bookTitle.innerHTML = titlesSection[indexNavLink];
    const listLinkElements = document.querySelectorAll('.topNav_listLink');
    for (let j = 0; j < listLinkElements.length; j += 1) {
      listLinkElements[j].style.color = '#000';
      middleSection[j].style.display = 'none';
      if (j === indexNavLink) {
        listLinkElements[j].style.color = '#0000ff';
        middleSection[j].style.display = 'flex';
      }
    }
  });
}
