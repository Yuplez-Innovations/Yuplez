const gsapConnection = (content1, left, content2, right) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: content1,
            // markers: true,
            start: "0% 80%",
            end: "80% 80%",
            scrub: true,
        },
    }).to(content1, {
        left: left,
    });
    gsap.timeline({
        scrollTrigger: {
            trigger: content2,
            // markers: true,
            start: "0% 80%",
            end: "80%",
            scrub: true,
        },
    }).to(content2, {
        right: right,
    });
};

gsapConnection(".services-content1", "0%", ".services-text1", "0%");
gsapConnection(".services-content2", "0%", ".services-text2", "0%");
gsapConnection(".services-content3", "0%", ".services-text3", "0%");
gsapConnection(".services-content4", "0%", ".services-text4", "0%");
gsapConnection(".services-content5", "0%", ".services-text5", "0%");
