const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

let books = [];

btn.addEventListener('click', () => {
  const book = {
    // id: books.length + 1,
    title: Title.value,
    author: Author.value,
  };
  books.push(book);

  showBooks.innerHTML = books
    .map(
      (i) =>
        `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      <hr>`
    )
    .join('');
});

const removeBook = (title) => {
  console.log('books2', title);
  books = books.filter((i) => i?.title !== title);
  showBooks.innerHTML = books
    .map(
      (i) =>
        `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button onClick='removeBook(${i?.title})'>Remove</button>
      <hr>`
    )
    .join('');
};

// Locale storage

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));

  if (userInput !== null) {
    Title.value = userInput.Title;
    Author.value = userInput.Author;
  } else {
    Title.value = '';
    Author.value = '';
  }
});

const form = document.querySelector('.form');

form.addEventListener('input', () => {
  const object = {};

  object.Title = Title.value;
  object.Author = Author.value;

  localStorage.setItem('data', JSON.stringify(object));
});
