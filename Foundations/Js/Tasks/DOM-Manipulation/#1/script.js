const redText = document.querySelector("#p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const blueText = document.querySelector("#h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

const container = document.querySelector("#div");
container.style.border = "10px solid black";
container.style.background = "pink";

let h1 = document.createElement("H1");
let p2 = document.createElement("p2");
h1.textContent = "test";
p2.textContent = "ME TOO!";
container.append(h1, p2)
// append(h1, p2) allows me to append / add both of the elements
// in one line another way is shown below:
// container.appendChild(h1)
// continer.appendChild(p2)
// └──── the outcome is the same with either line(s) of code