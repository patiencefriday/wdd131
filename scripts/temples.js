const currentyear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    nav.classList.toggle("open");
});
