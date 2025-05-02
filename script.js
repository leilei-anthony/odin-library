const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = self.crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
    displayLibrary(myLibrary);
}

function addBookToLibrary() {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    if(read === 'on') {
        read = true;
    } else {
        read = false;
    }

    const book = new Book(title, author, pages, read)
    myLibrary.push(book);

    displayLibrary(myLibrary);
    console.log(myLibrary)
}

function displayLibrary(myLibrary) {
    const library = document.getElementById('library');
    library.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        displayBook(book);
    }

}

function displayBook(book) {
    const library = document.getElementById('library');
    const bookCard = document.createElement('div');

    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p class="author"><strong>Author:</strong> ${book.author}</p>
        <p class="pages"><strong>Pages:</strong> ${book.pages}</p>
        <p class="read"><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        <p class="uuid"><strong>UUID:</strong> ${book.uuid}</p>
    `;

    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = 'Toggle Read';
    toggleBtn.addEventListener('click', () => {
        book.toggleRead();
    })
    bookCard.appendChild(toggleBtn);


    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Remove Book';
    deleteBtn.addEventListener('click', () => {
        deleteBook(book.uuid);
    })
    bookCard.appendChild(deleteBtn);

    library.appendChild(bookCard);
}

function deleteBook(id) {
    const index = myLibrary.findIndex(book => book.uuid === id);
    console.log(id);
    console.log(index);
    if(index !== -1) {
        myLibrary.splice(index, 1);
    }

    displayLibrary(myLibrary)
}

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 288, true);
// addBookToLibrary('1984', 'George Orwell', 328, false);
// addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
// addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, false);
// addBookToLibrary('Brave New World', 'Aldous Huxley', 311, true);
// console.log(myLibrary)

displayLibrary(myLibrary);