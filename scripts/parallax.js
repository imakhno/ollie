let elements = document.querySelectorAll(".parallax");
let speed = 0.6;
let maxOffset = 150;

window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        elements.forEach((element) => {
            let rect = element.getBoundingClientRect().top + window.scrollY;
            let scrollY = (window.scrollY - rect) * speed;

            if (scrollY > maxOffset) scrollY = maxOffset;
            if (scrollY < -maxOffset) scrollY = -maxOffset;

            element.style.transform = `translateY(${scrollY}px)`;
        });
    });

    let header = document.querySelector(".header");
    let scrollThreshold = 50;

    if (window.scrollY > scrollThreshold) {
        header.style.background = "rgba(0, 0, 0, 0.7)";
        header.style.backdropFilter = "blur(15px)";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
    }
});

// =================================================
