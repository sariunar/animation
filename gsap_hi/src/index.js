let animationToBtn = () => {
    const btn = gsap.timeline({ defaults: { duration: .1, opacity: 1 } });
    btn.to('.btn', { rotate: 5 })
        .to('.btn', { rotate: -5 })
        .to('.btn', { rotate: 5 })
        .to('.btn', { rotate: -5 })
        .to('.btn', { rotate: 5 })
        .to('.btn', { rotate: -5 })
        .to('.btn', { rotate: 5 })
        .to('.btn', { rotate: 0 });
    return btn;
}
animationToBtn();

function clickBtn() {
    gsap
        .timeline({
            repeat: 0,
            defaults: {
                duration: 0.8
            }
        })
        .to(".h-1", {
            x: 50,
            y: 70,
            scale: 2,
            rotate: 180,
            ease: "back"
        })
        .to(".h-2", {
            x: 50,
            y: 90,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-3", {
            x: 50,
            y: 110,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-4", {
            x: 50,
            y: 130,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-5", {
            x: 50,
            y: 150,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-6", {
            x: 50,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-7", {
            x: 50,
            y: 190,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-8", {
            x: 50,
            y: 210,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-9", {
            x: 50,
            y: 230,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-10", {
            x: 50,
            y: 250,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-11", {
            x: 70,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=1")
        .to(".h-12", {
            x: 90,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-13", {
            x: 110,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-14", {
            x: 120,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")

        .to(".h-15", {
            x: 140,
            y: 70,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=1")
        .to(".h-16", {
            x: 140,
            y: 90,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-17", {
            x: 140,
            y: 110,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-18", {
            x: 140,
            y: 130,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-19", {
            x: 140,
            y: 150,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-20", {
            x: 140,
            y: 170,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-21", {
            x: 140,
            y: 190,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-22", {
            x: 140,
            y: 210,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-23", {
            x: 140,
            y: 230,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")
        .to(".h-24", {
            x: 140,
            y: 250,
            scale: 2,
            rotate: 180,
            ease: "back"
        },
            "-=0.7")

        .to(".s-1", {
            x: 200,
            y: 170,
            scale: 2,
            rotate: 90,
            ease: "back"
        },
            "-=1")
        .to(".s-2", {
            x: 200,
            y: 190,
            scale: 2,
            rotate: 90,
            ease: "back"
        },
            "-=0.7")
        .to(
            ".s-3",
            {
                x: 200,
                y: 210,
                scale: 2,
                rotate: 90,
                ease: "back"
            },
            "-=0.7")
        .to(
            ".s-4",
            {
                x: 200,
                y: 230,
                scale: 2,
                rotate: 90,
                ease: "back"
            },
            "-=0.7"
        )
        .to(
            ".s-5",
            {
                x: 200,
                y: 250,
                scale: 2,
                rotate: 90,
                ease: "back"
            },
            "-=0.7"
        )
        .to(
            ".s-6",
            {
                x: 200,
                y: 120,
                scale: 2,
                rotate: 135,
                ease: "bounce"
            },
            "-=0.6"
        );
}