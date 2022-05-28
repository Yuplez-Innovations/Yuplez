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
    document.querySelector(".dark-logo").classList.toggle("dark-mode");
    

    // services
    document.querySelectorAll(".content-service h1").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".content-service").forEach((element) => {
        element.classList.toggle("dark-mode");
    });

    toggleDarkMode.classList.toggle("dark-mode");
};
