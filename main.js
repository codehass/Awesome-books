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
    this.books.push(obj);
    localStorage.setItem('data', JSON.stringify(this.books));
    window.location.reload();
  }

  removeBook(title) {
    this.books = JSON.parse(localStorage.getItem('data'));
    this.books = this.books.filter((i) => i?.title !== title);
    localStorage.setItem('data', JSON.stringify(this.books));
    window.location.reload();
  }
}

const bookc = new Book();

btn.addEventListener('click', () => {
  const bookObj = {
    title: Title.value,
    author: Author.value,
  };
  bookc.addBook(bookObj);
});

// ***********

// Locale storage

window.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('data'));
  showBooks.innerHTML = books
    .map(
      (i) => `
      <div class="element">
      <h5>${i?.title} by ${i?.author} </h5>
      <button onClick='bookc.removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      </div>
      `,
    )
    .join('');
});
