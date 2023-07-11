import bookList from './elements.js';

let books = JSON.parse(localStorage.getItem('bookData')) || [];

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
export default newBook;
