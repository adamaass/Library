let myLibrary=[]

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages; 
  this.read = read;
}

function addBookToLibrary() {
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value; 
let pages = document.querySelector("#pages").value; 
let read = document.querySelector("#read").checked; 
let newBook = new Book (title, author, pages, read); 
myLibrary.push(newBook);
console.log(myLibrary); 
}

let newBookbtn = document.querySelector("#new-book-btn")
newBookbtn.addEventListener("click", () => {
let newBookform = document.querySelector("#new-book-form")
newBookform.style.display = "flex"; 
})

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
})