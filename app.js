// book class; represent book
class Book {

    constructor(title, author, number) {
        this.title = title;
        this.author = author;
        this.Number = number;
    }
}
//ui class: handle ui tasks 
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Ekunola Paul',
                number: '08112699079'
            },
            {
                title: 'Book One',
                author: 'Ekunola Paul',
                number: '08112699079'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row =document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></a></td>
        `; 
        list.appendChild(row);
    }
}
// storage class: handles storage 

// event: display books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event : add a book 


document.getElementById('#book-form').addEventListener('submit', (e) => {

    // prevent actual submit
    e.preventDefault();
    // to get the form values 
    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value; 
    const number = document.querySelector('#number').value; 


    // instantiate book
const book = new Book(title, author, number);
console.log(book)
});

//


// event: remove a book 

