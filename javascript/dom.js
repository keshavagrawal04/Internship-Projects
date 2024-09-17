const element = document.getElementById("heading");
const changeButton = document.getElementById("change-btn");
const mainDiv = document.getElementById("main");
const pTagsInMain = mainDiv.getElementsByTagName("p");
console.log(pTagsInMain);

changeButton.addEventListener("mouseenter", function () {
  element.innerHTML = "Dom Changed";
  element.style.color = "red";
});

changeButton.addEventListener("mouseleave", function () {
  element.innerHTML = "Dom Changed";
  element.style.color = "black";
});

console.log("Text Child", element.firstChild.nodeValue);

const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("error");

window.addEventListener("resize", function () {
  document.getElementById("heading").innerHTML = "Resized";
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const name = nameInput.value;

  if (name === "") {
    error.innerHTML = "Name is required";
    error.style.color = "red";
  } else {
    error.innerHTML = "Form Submitted...";
    error.style.color = "green";
  }
});

const pElm = document.getElementById("p-elm");
const dElm = document.getElementById("p-elm");

dElm.addEventListener(
  "click",
  () => {
    console.log("Div Element Clicked");
  },
  true
);
pElm.addEventListener(
  "click",
  () => {
    console.log("P Element Clicked");
  },
  true
);

const ulElement = document.getElementsByTagName("ul")[0];

// const heading = document.createElement("h1");
// const headingTextNode = document.createTextNode("This is new Heading");
// heading.appendChild(headingTextNode);

const div = document.getElementById("parent-div");

div.remove();

const input = document.getElementById("title");
const addBtn = document.getElementById("add-btn");
const todos = [];

addBtn.addEventListener("click", () => {
  if (!input) {
    console.log("Title is required");
  } else {
    todos.push(input.value);
    const paragraph = document.createElement("p");
    const textNode = document.createTextNode(input.value);
    paragraph.appendChild(textNode);
    todoItems.appendChild(paragraph);
  }
});

const todoItems = document.getElementById("todo-items");
