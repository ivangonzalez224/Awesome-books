// use addEventListeners to the pages links
let displayBooks = document.getElementById('display-list');
let navbarDisplaylink = document.getElementById('topNav_listItem');


let displayAddBook = document.getElementById('addBook-div');
let navbarAddlink = document.getElementById('topNav_newItem');


let displayContact = document.getElementById('contact-div');
let navbarContactlink = document.getElementById('topNav_contactItem');
  
navbarDisplaylink.addEventListener('click', () => {
  displayBooks.classList.remove('hidden');
  displayAddBook.classList.add('hidden');
  displayContact.classList.add('hidden');
})

navbarAddlink.addEventListener('click', () => {
  displayAddBook.classList.remove('hidden');
  displayBooks.classList.add('hidden');
  displayContact.classList.add('hidden');
})

navbarContactlink.addEventListener('click', () => {
  displayContact.classList.remove('hidden');
  displayAddBook.classList.add('hidden');
  displayBooks.classList.add('hidden');
})