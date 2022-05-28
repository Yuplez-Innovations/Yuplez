// const scroller = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     tablet: {
//         smooth: true,
//     },
//     smartphone: {
//         smooth: true,
//     }
// });

// const mainDiv1 = document.querySelectorAll(".main-div")[0];
const mainDiv2 = document.querySelectorAll(".main-div")[1];
const mainDiv3 = document.querySelectorAll(".main-div")[2];
const mainDiv4 = document.querySelectorAll(".main-div")[3];

window.addEventListener("load", () => {
    const arr = [];
    let i = 0;
    while (i < 4) {
        const ranNo = Math.floor(Math.random() * 4);
        if (arr.includes(ranNo)) continue;
        arr.push(ranNo);
        i++;
    }
    setTimeout(() => {
        // mainDiv1.style.order = arr[0];
        mainDiv2.style.order = arr[1];
        mainDiv3.style.order = arr[2];
        mainDiv4.style.order = arr[3];
    }, 500);
});
