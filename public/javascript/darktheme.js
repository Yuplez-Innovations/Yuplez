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
    // main page
    document.querySelector(".main-section").classList.toggle("darkTheme");

    // services
    document.querySelector(".services-section").classList.toggle("darkTheme");

    // teams
    document.querySelector(".team-section").classList.toggle("darkTheme");
    document.querySelectorAll(".swiper-slide").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".slide-intro-div h1").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".slide-intro-div p").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
    document.querySelectorAll(".team-content").forEach((element) => {
        element.classList.toggle("darkTheme");
    });
};
