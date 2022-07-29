const cursor = document.querySelector(".cursor");
const teamSection = document.querySelector(".team-section");

teamSection.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

VanillaTilt.init(document.querySelectorAll(".team-image"), {
    max: 15,
    glare: true,
    reverse: true,
    "max-glare": 0.3,
});
