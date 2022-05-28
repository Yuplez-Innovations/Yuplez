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
    document.querySelectorAll(".nav_atag").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelector(".contact_nav").classList.toggle("dark-mode");
    document
        .querySelector(".switch-toggle-mobile input[type='checkbox'] + label")
        .classList.toggle("dark-mode");

    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".logo").classList.toggle("dark-mode");
    document
    .querySelector(".switch-toggle input[type='checkbox'] + label")
    .classList.toggle("dark-mode");
    // document.querySelector(".main-page").classList.toggle("dark-mode");
    // document.querySelector(".main-page::after").classList.toggle("dark-mode");
    
    document.querySelector(".dark-logo").classList.toggle("dark-mode");
    

    document.querySelectorAll(".tech-stack").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-main-div p").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".image-main-div img").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-div").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-div h1").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
};
