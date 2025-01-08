import generateHomeContent from "./home.js";
import generateMenuContent from "./menu.js";
import generateContactUsContent from "./contactUs.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactUsBtn = document.querySelector("#contact-us");

function clearContent() {
    content.innerHTML = "";
}

clearContent();
content.appendChild(generateHomeContent());

homeBtn.addEventListener("click", () => {
    clearContent();
    content.appendChild(generateHomeContent());
});

menuBtn.addEventListener("click", () => {
    clearContent();
    content.appendChild(generateMenuContent());
});

contactUsBtn.addEventListener("click", () => {
    clearContent();
    content.appendChild(generateContactUsContent());
});