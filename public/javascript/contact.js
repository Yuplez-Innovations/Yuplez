const toggleButton = document.querySelector(".toggle-button");

// dark-theme

toggleButton.addEventListener("click", () => {
    darkThemeFunction();
});

const darkThemeFunction = () => {
    // nav-bar
    document.querySelectorAll(".social-media-section a").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelector(".nav").classList.toggle("darkTheme");
    document.querySelector(".nav-a").classList.toggle("darkTheme");
    document.querySelector(".nav-container").classList.toggle("darkTheme");
    document.querySelector(".mouse-box1").classList.toggle("darkTheme");
    document.querySelectorAll(".container-div a").forEach((element) => {
        element.classList.toggle("darkTheme");
    });

    // contact us
    document.querySelectorAll(".label-div label").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelector(".label-div textarea").classList.toggle("darkTheme");
    document.querySelectorAll(".label-div input").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".label-div").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".div-details h1").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".div-details a").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelector(".contact-main-div").classList.toggle("darkTheme");
};

// main page
// document.querySelector(".main-section").classList.toggle("darkTheme");
