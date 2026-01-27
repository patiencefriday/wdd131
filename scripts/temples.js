const currentyear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.getElementById("menu");
const nav = document.getElementById("navbar");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    nav.classList.toggle("open");
});
