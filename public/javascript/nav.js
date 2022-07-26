const navHambugger = document.querySelector(".nav-hambugger");
const navContainer = document.querySelector(".nav-container");

navHambugger.addEventListener("click", () => {
    navContainer.classList.toggle("nav-active");
});

const mousebox1 = document.querySelector(".mouse-box1");
const containerDiv = document.querySelector(".container-div");
const navAtag = document.querySelectorAll(".navAtag");
const navAtag1 = document.querySelector(".navAtag1");
const navAtag2 = document.querySelector(".navAtag2");
const navAtag3 = document.querySelector(".navAtag3");
const navAtag4 = document.querySelector(".navAtag4");
const navAtag5 = document.querySelector(".navAtag5");
const changingText = document.querySelector(".changing-text");

navAtag.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
        mousebox1.style.left = e.pageX + "px";
        mousebox1.style.top = e.pageY + "px";
        mousebox1.style.opacity = 1;
        mousebox1.style.transform = "translate(-50%, -50%)";
    });
    element.addEventListener("mouseout", (e) => {
        mousebox1.style.opacity = 0;
    });
});

const changeTextStyle = (name) => {
    changingText.innerHTML = name;
    changingText.style.opacity = 1;
}

navAtag1.addEventListener("mousemove", () => changeTextStyle("Home"))
navAtag2.addEventListener("mousemove", () => changeTextStyle("Services"))
navAtag3.addEventListener("mousemove", () => changeTextStyle("Contact"))
navAtag4.addEventListener("mousemove", () => changeTextStyle("Projects"))
// navAtag5.addEventListener("mousemove", () => changeTextStyle("Register"))




// navAtag3.addEventListener("mousemove", () => {
//     changingText.innerHTML = "Teams";
//     changingText.style.opacity = 1;
// });
// navAtag4.addEventListener("mousemove", () => {
//     changingText.innerHTML = "Login";
//     changingText.style.opacity = 1;
// });
// navAtag5.addEventListener("mousemove", () => {
//     changingText.innerHTML = "Register";
//     changingText.style.opacity = 1;
// });

