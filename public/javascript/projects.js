const gsapconnection = (content1, content2, content3, content4, content5) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: content1,
            start: "-9% 0%",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            // markers: true,
        },
    }).to(content1, {
        duration: 1,
        x: "0%",
        ease: "power2.inOut",
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: content2,
            start: "calc(90%) top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            // markers: true,
        },
    }).to(content2, {
        duration: 1,
        x: "0%",
        ease: "power2.inOut",
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: content3,
            start: "-15% 0%",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            // markers: true,
        },
    }).to(content3, {
        duration: 1,
        delay: 10,
        scale: 0.7,
        x: "-20%",
        y: "50%",
        ease: "power2.inOut",
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: content4,
            start: "-10% 0%",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            // markers: true,
        },
    }).to(content4, {
        duration: 1,
        // delay: 10,
        y: "70%",
        ease: "power2.inOut",
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: content5,
            start: "-10% 0%",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            // markers: true,
        },
    }).to(content5, {
        duration: 1,
        delay: 10,
        opacity: 1,
        x: "75%",
        // y: "10%",
        ease: "power2.inOut",
    });
};

gsapconnection(
    ".container-projects1",
    ".image-projects-video1",
    ".image-projects1",
    ".container-projects1",
    ".content-projects1"
);
gsapconnection(
    ".container-projects2",
    ".image-projects-video2",
    ".image-projects2",
    ".container-projects2",
    ".content-projects2"
);
gsapconnection(
    ".container-projects3",
    ".image-projects-video3",
    ".image-projects3",
    ".container-projects3",
    ".content-projects3"
);