/* eslint-disable no-unused-vars */
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

let books = [];

btn.addEventListener('click', () => {
  const book = {
    title: Title.value,
    author: Author.value,
  };
  books = (JSON.parse(localStorage.getItem('data')));
  books.push(book);
  localStorage.setItem('data', JSON.stringify(books));
  showBooks.innerHTML = books.map((i) => `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      <hr>`)
    .join('');
});

const removeBook = (title) => {
  books = (JSON.parse(localStorage.getItem('data')));
  books = books.filter((i) => i?.title !== title);
  localStorage.setItem('data', JSON.stringify(books));
  showBooks.innerHTML = books.map((i) => `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button onClick='removeBook(${i?.title})'>Remove</button>
      <hr>`)
    .join('');
};

// Locale storage

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));
  showBooks.innerHTML = userInput
    .map(
      (i) => `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      <hr>`,
    )
    .join('');
});
