const toggleDarkMode = document.querySelector(".toggle_button");
const toggleDarkModeMobile = document.querySelector(".toggle_button-mobile");

toggleDarkMode.addEventListener("input", () => {
    darkmode();
});
toggleDarkModeMobile.addEventListener("input", () => {
    darkmode();
});

const darkmode = () => {
    // nav
    document
        .querySelectorAll(".navbar-container .hamburger-lines .line")
        .forEach((element) => {
            element.classList.toggle("dark-mode");
        });
    document.querySelector(".navbar .menu-items").classList.toggle("dark-mode");
    document.querySelector(".contact_nav").classList.toggle("dark-mode");
    document
        .querySelector(".switch-toggle-mobile input[type='checkbox'] + label")
        .classList.toggle("dark-mode");

    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".logo").classList.toggle("dark-mode");
    document.querySelectorAll(".nav_atag").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document
        .querySelector(".switch-toggle input[type='checkbox'] + label")
        .classList.toggle("dark-mode");
    document.querySelector(".main-page").classList.toggle("dark-mode");
    // document.querySelector(".main-page::after").classList.toggle("dark-mode");
    // about
    document.querySelectorAll(".about-image-img").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".about-image-img img").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".tech-button").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".about-content-div").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    // services
    document.querySelectorAll(".content-service h1").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-service").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    // contact us
    document
        .querySelector(".contact-us-section form")
        .classList.toggle("dark-mode");
    document.querySelector(".div-form textarea").classList.toggle("dark-mode");
    document.querySelector(".submit-button").classList.toggle("dark-mode");
    document.querySelectorAll(".div-form input").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".div-form label").forEach((element) => {
        element.classList.toggle("dark-mode");
    });

    // developers

    document.querySelectorAll(".image-div").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".shadow-div").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".social-icons a").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".social-icons a img").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-div").forEach((element) => {
        element.classList.toggle("dark-mode");
    });

    // toggleDarkMode.classList.toggle("dark-mode");
};
