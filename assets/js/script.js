let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list');

function addBook(title, author) {
  if (title !== '' && author !== '') {
    const book = {
      id: books.length + 1,
      title,
      author,
    };

    books.push(book);
    localStorage.setItem('bookData', JSON.stringify(books));
  }
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(formTitle.value, formAuthor.value);

  formTitle.value = '';
  formAuthor.value = '';
  window.location.reload();
});

function removeBook(id) {
  let bookData = JSON.parse(localStorage.getItem('bookData'));
  bookData = bookData.filter((local) => local.id !== parseInt(id, 10));
  books = bookData;
  localStorage.setItem('bookData', JSON.stringify(books));
}