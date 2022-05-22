const toggleDarkMode = document.querySelector(".toggle_button");

toggleDarkMode.addEventListener("click", () => {
    darkmode();
});

const darkmode = () => {
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".logo").classList.toggle("dark-mode");
    document.querySelectorAll(".nav_atag").forEach((element) => {
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

    toggleDarkMode.classList.toggle("dark-mode");
};
