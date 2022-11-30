/* eslint-disable no-unused-vars */
const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

let books = [];

class Book {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
  }

  addElement() {
    showBooks.innerHTML = books
      .map(
        (i) => `
      <div>
      <h5>${i?.title} by ${i?.author} </h5>
      <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      </div>`
      )
      .join('');
  }

  removeElement() {}
}

btn.addEventListener('click', () => {
  books = JSON.parse(localStorage.getItem('data'));

  const bookc = new Book(Title.value, Author.value);
  console.log(bookc);

  // const book = {
  //   title: Title.value,
  //   author: Author.value,
  // };

  // books = JSON.parse(localStorage.getItem('data'));
  // console.log(book);

  books.push(bookc);
  localStorage.setItem('data', JSON.stringify(books));

  bookc.addElement();

  // showBooks.innerHTML = books
  //   .map(
  //     (i) => `
  //     <div>
  //     <h5>${i?.title} by ${i?.author} </h5>
  //     <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
  //     </div>`
  //   )
  //   .join('');
});

const removeBook = (title) => {
  books = JSON.parse(localStorage.getItem('data'));
  books = books.filter((i) => i?.title !== title);
  localStorage.setItem('data', JSON.stringify(books));
  showBooks.innerHTML = books
    .map(
      (i) => `
      <div>
      <h5>${i?.title} by ${i?.author} </h5>
      <button class="test" onClick='removeBook(${JSON.stringify(
        i?.title
      )})'>Remove</button>
      </div>`
    )
    .join('');
  // window.location.reload();
};

// ***********

// Locale storage

window.addEventListener('DOMContentLoaded', () => {
  // localStorage.setItem('data', JSON.stringify(books));
  books = JSON.parse(localStorage.getItem('data'));
  showBooks.innerHTML = books
    .map(
      (i) => `
      <div class="element">
      <h5>${i?.title} by ${i?.author} </h5>
      <button onClick='removeBook(${JSON.stringify(i?.title)})'>Remove</button>
      </div>
      `
    )
    .join('');
});
