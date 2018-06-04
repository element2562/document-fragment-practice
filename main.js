let articleSelector = document.querySelector("#messages");
let bodySelector = document.querySelector("body");
// Less expensive way of putting items on DOM
let fragment = document.createDocumentFragment();
// Creating all sections
let sectionOne = document.createElement("section");
sectionOne.setAttribute("class", "message");
sectionOne.textContent = "I";

let sectionTwo = document.createElement("section");
sectionTwo.setAttribute("class", "message");
sectionTwo.textContent = "Am";

let sectionThree = document.createElement("section");
sectionThree.setAttribute("class", "message");
sectionThree.textContent = "So";

let sectionFour = document.createElement("section");
sectionFour.setAttribute("class", "message");
sectionFour.textContent = "Very";

let sectionFive = document.createElement("section");
sectionFive.setAttribute("class", "message");
sectionFive.textContent = "Tired";
// Putting all sections inside fragment and fragment in article
fragment.appendChild(sectionOne);
fragment.appendChild(sectionTwo);
fragment.appendChild(sectionThree);
fragment.appendChild(sectionFour);
fragment.appendChild(sectionFive);
articleSelector.appendChild(fragment);