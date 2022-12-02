/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

class Book {
  constructor() {
    this.books = [];
  }

  addBook(obj) {
    this.books = JSON.parse(localStorage.getItem('data'));
    if (this.books === null) {
      this.books = [];
      localStorage.setItem('data', this.books);
      this.books.push(obj);
      localStorage.setItem('data', JSON.stringify(this.books));
      window.location.reload();
    } else {
      this.books.push(obj);
      localStorage.setItem('data', JSON.stringify(this.books));
      window.location.reload();
    }
  }

  removeBook(id) {
    this.books = JSON.parse(localStorage.getItem('data'));
    this.books = this.books.filter((i) => i?.id !== id);
    localStorage.setItem('data', JSON.stringify(this.books));
    window.location.reload();
  }
}

const bookc = new Book();

const newBook = () => {
  if (Title.value === '' || Author.value === '') {
    document.querySelector('.form > span').textContent = 'All fiels are required!';
  } else {
    const bookObj = {
      id: new Date().getUTCMilliseconds(),
      title: Title.value,
      author: Author.value,
    };
    bookc.addBook(bookObj);
  }
};

// ***********

// Locale storage

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('data'));
  showBooks.innerHTML = books
    .map(
      (i) => `
      <div class="element">
      <h5>${i?.title} by ${i?.author} </h5>
      <button onClick='bookc.removeBook(${i?.id})'>Remove</button>
      </div>
      `,
    )
    .join('');
});
