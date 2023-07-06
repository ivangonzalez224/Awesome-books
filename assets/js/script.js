let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#display-list');
const navbarDisplaylink = document.getElementById('topNav_listItem');
const displayAddBook = document.getElementById('add-book-div');
const navbarAddlink = document.getElementById('topNav_newItem');
const displayContact = document.getElementById('contact-div');
const navbarContactlink = document.getElementById('topNav_contactItem');

const bookTitle = document.querySelector('.book-title');
bookList.style.display = 'block';
displayAddBook.style.display = 'none';


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
})

const date = document.getElementById('date');
date.innerHTML = `<small>${Date()}</small>`;

navbarDisplaylink.addEventListener('click', () => {
  console.log('prueba');
  navbarDisplaylink.style.color = '#0000ff';
  navbarAddlink.style.color = '#000';
  navbarContactlink.style.color = '#000';
  bookTitle.innerHTML = 'All awesome books';
  bookList.style.display = 'block';
  displayAddBook.style.display = 'none';
  displayContact.style.display = 'none';
});

navbarAddlink.addEventListener('click', () => {
  navbarAddlink.style.color = '#0000ff';
  navbarDisplaylink.style.color = '#000';
  navbarContactlink.style.color = '#000';
  bookTitle.innerHTML = 'Add a new book';
  bookList.style.display = 'none';
  displayAddBook.style.display = 'flex';
  displayContact.style.display = 'none';
});

navbarContactlink.addEventListener('click', () => {
  navbarContactlink.style.color = '#0000ff';
  navbarAddlink.style.color = '#000';
  navbarDisplaylink.style.color = '#000';
  bookTitle.innerHTML = 'Contact information';
  bookList.style.display = 'none';
  displayAddBook.style.display = 'none';
  displayContact.style.display = 'flex';
});

