// Book constructor
    // all books should have a unique id generated using cryptio.randomUUID

// Function that create's books and put's into an array

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    if(Number.isInteger(pages) &&
        typeof title === 'string' &&
        typeof author === 'string' &&
        typeof read === 'boolean') {
        const book = new Book(title, author, pages, read)
        myLibrary.push(book);
    }

    const library = document.getElementById('library');
    const bookCard = document.createElement('div');

    bookCard.innerHTML = `
        <h3>${title}</h3>
        <p class="author"><strong>Author:</strong> ${author}</p>
        <p class="pages><strong>Pages:</strong> ${pages}</p>
        <p class="read><strong>Read:</strong> ${read ? 'Yes' : 'No'}</p>
    `;

    library.appendChild(bookCard);

}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 288, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, false);
addBookToLibrary('Brave New World', 'Aldous Huxley', 311, true);
console.log(myLibrary)


