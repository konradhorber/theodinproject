const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const redText = document.createElement("p");

redText.classList.add("redText");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

// 2. an <h3> with blue text that says “I’m a blue h3!”

const blueHThree = document.createElement("h3");

blueHThree.classList.add("blueHThree");
blueHThree.style.color = "blue";
blueHThree.textContent = "I'm a blue h3!";

container.appendChild(blueHThree)

// 3. a <div> with a black border and pink background color with the following 
// elements inside of it:
const blackPinkDiv = document.createElement("div");

blackPinkDiv.setAttribute(
    "style",
    "background: pink; border: 1px solid black;"
);

container.appendChild(blackPinkDiv);

// another <h1> that says “I’m in a div”
const divHOne = document.createElement("h1");

divHOne.textContent = "I'm in a div";

blackPinkDiv.appendChild(divHOne);

// a <p> that says “ME TOO!”
const pMeToo = document.createElement("p");

pMeToo.textContent = "ME TOO!";

blackPinkDiv.appendChild(pMeToo);


// events part
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });