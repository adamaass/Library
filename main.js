let myLibrary=[]

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages; 
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read =!this.read; 
}

function render(){
  let libraryEl = document.querySelector("#library")
  libraryEl.innerHTML=""; 
  for (let i=0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div")
    bookEl.innerHTML = `
    <div class="card-holder">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button> 
    <button class="toggleRead" onclick="toggleRead(${i})">Toggle</button>
    </div>` 
    bookEl.style.border= "solid"
    libraryEl.appendChild(bookEl);
  }
}

function toggleRead (index) {
  myLibrary[index].toggleRead(); 
  render()
}

function addBookToLibrary() {
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value; 
let pages = document.querySelector("#pages").value; 
let read = document.querySelector("#read").checked; 
let newBook = new Book (title, author, pages, read); 
myLibrary.push(newBook);
render();  
}

function removeBook (index) {
  myLibrary.splice(index,1);
  render();
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