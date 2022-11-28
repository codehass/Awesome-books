const showBooks = document.querySelector('.record');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const btn = document.querySelector('.form button');

let books = [];

btn.addEventListener('click', () => {
    const book = {
        id: books.length + 1,
        title: Title.value,
        author: Author.value,
    };
    books.push(book);
    console.log('books', books);
    
    showBooks.innerHTML = books.map((i) =>
        `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button type='button' onClick='removeBook(${i?.id})'>Remove</button>
      <hr>`
    ).join('');
});

const removeBook = (id) => {
    console.log('books2', id);
    books = books.filter(i => i?.id !== id);
    // console.log('books1', remBooks);
    showBooks.innerHTML = books.map((i) =>
        `<h5>${i?.title}</h5>
      <h5>${i?.author}</h5>
      <button type='button' onClick='removeBook(${i?.id})'>Remove</button>
      <hr>`
    ).join('');
}
