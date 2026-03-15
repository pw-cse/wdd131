const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuButton.textContent =
        menuButton.textContent === "☰" ? "X" : "☰";

});


/* Footer Dynamic Year */

document.querySelector("#year").textContent =
    new Date().getFullYear();


/* Last Modified */

document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;