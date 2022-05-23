// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();

// tl.to(".service-main-div", 5, { x: -window.innerWidth });

// ScrollTrigger.create({
//     animation: tl,
//     trigger: ".service-main-div",
//     start: "center center",
//     end: "+=1000",
//     // end: "bottom bottom",
//     scrub: true,
//     pin: true,
// });


// const gsapanimation1 = (trig, position) => {
//     gsap
//         .timeline({
//             scrollTrigger: {
//                 trigger: trig,
//                 start: "top 80%",
//             },
//         })
//         .from(trig, {
//             duration: 0.8,
//             left: position,
//             stagger: 1
//         });
// }

// gsapanimation1(".about-image-img", "0%");

// const gsapanimation1 = (trig, position) => {
// }
// gsap
//     .timeline({
//         scrollTrigger: {
//             trigger: ".about-section",
//             start: "top 80%",
//             markers: true,
//         },
//     })
//     .from(".about-image-img", {
//         y: 0,
//         // stagger: 0.5,
//         ease: "linear",
//     });