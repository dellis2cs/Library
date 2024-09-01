const myLibrary = [];
const container = document.querySelector(".container");
const addBookButton = document.querySelector(".addBook");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (status === true) {
    this.status = "completed";
  } else {
    this.status = "not read yet";
  }
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages" +
      ", " +
      this.status
    );
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
const book1 = new Book("Bleach", "Kisuke", "200", true);
const book2 = new Book("Naruto", "Sasuke", "150", false);
addBookToLibrary(book1);
addBookToLibrary(book2);

function getBookResponse() {
  let title = prompt("what is the title of the book?");
  let author = prompt("who is the author of the book?");
  let pages = prompt("how many pages are in the book?");
  let status = prompt("have you read this book?(yes/no)");
  if (status === "yes") {
    status = true;
  } else if (status === "no") {
    status = false;
  } else {
    status = prompt("please enter yes or no");
  }
  let book = new Book(title, author, pages, status);
  addBookToLibrary(book);
  displayLibrary(myLibrary);
}

function displayLibrary(library) {
  let newDiv;
  let para;
  container.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("Card");
    newDiv.setAttribute("id", `${i}`);
    let keys = Object.keys(library[i]);
    for (let j = 0; j < keys.length - 1; j++) {
      para = document.createElement("p");
      if (j != 0) {
        para.textContent = keys[j] + ": " + library[i][keys[j]];
      } else {
        para.textContent = library[i][keys[j]];
      }
      newDiv.appendChild(para);
    }
    let toggleRead = document.createElement("button");
    toggleRead.textContent = "Toggle Read Status";
    toggleRead.classList.add("toggle");
    newDiv.appendChild(toggleRead);
    container.appendChild(newDiv);
  }
}
displayLibrary(myLibrary);

addBookButton.addEventListener("click", function () {
  getBookResponse();
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("toggle")) {
    let parentContainer = event.target.parentElement;
    let id = parentContainer.id;
    if (myLibrary[id].status === "completed") {
      myLibrary[id].status = "not read yet";
    } else {
      myLibrary[id].status = "completed";
    }
    displayLibrary(myLibrary);
  }
});
