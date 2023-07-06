let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#display-list');

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
      removeButton.textContent = 'Remove';
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



const displayBooks = document.getElementById('display-list');
const navbarDisplaylink = document.getElementById('topNav_listItem');

const displayAddBook = document.getElementById('add-book-div');
const navbarAddlink = document.getElementById('topNav_newItem');

const displayContact = document.getElementById('contact-div');
const navbarContactlink = document.getElementById('topNav_contactItem');

const date = document.getElementById('date');
date.innerHTML = `<small>${Date()}</small>`;

  
navbarDisplaylink.addEventListener('click', () => {
})

navbarAddlink.addEventListener('click', () => {
})

navbarContactlink.addEventListener('click', () => {
})

