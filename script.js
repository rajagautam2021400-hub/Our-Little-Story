/* ================================= */
/* STORY NAVIGATION */
/* ================================= */


function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* ================================= */
/* OPEN STORY */
/* ================================= */

function openStory() {

    scrollToSection("story");

}


/* ================================= */
/* MESSAGE → MEMORIES */
/* ================================= */

function goToMemories() {

    scrollToSection("memories");

}


/* ================================= */
/* MEMORIES → GALLERY */
/* ================================= */

function goToNext() {

    scrollToSection("photo-gallery");

}


/* ================================= */
/* GALLERY → LETTER */
/* ================================= */

function goToLetterNext() {

    scrollToSection("letter");

}


/* ================================= */
/* LETTER → FINAL */
/* ================================= */

function goToFinalScene() {

    scrollToSection("final");

}


/* ================================= */
/* REPLAY */
/* ================================= */

function replayStory() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================= */
/* PHOTO LIGHTBOX */
/* ================================= */

function openPhoto(image) {

    const lightbox =
        document.getElementById("photoLightbox");

    const largePhoto =
        document.getElementById("largePhoto");


    if (!lightbox || !largePhoto) {
        return;
    }


    largePhoto.src =
        image.getAttribute("src");


    largePhoto.alt =
        image.getAttribute("alt") ||
        "Memory";


    lightbox.classList.add("active");


    document.body.style.overflow =
        "hidden";

}


/* ================================= */
/* CLOSE PHOTO */
/* ================================= */

function closePhoto() {

    const lightbox =
        document.getElementById("photoLightbox");


    if (!lightbox) {
        return;
    }


    lightbox.classList.remove("active");


    document.body.style.overflow =
        "auto";

}


/* ================================= */
/* ESC KEY → CLOSE PHOTO */
/* ================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);


/* ================================= */
/* FLOATING PARTICLES */
/* ================================= */

function createParticles() {

    const container =
        document.getElementById("particles");


    if (!container) {
        return;
    }


    const particleCount =
        window.innerWidth < 600
        ? 20
        : 35;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";


        particle.style.animationDelay =
            (Math.random() * 10) + "s";


        const size =
            2 + Math.random() * 3;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        container.appendChild(
            particle
        );

    }

}


/* ================================= */
/* SCROLL REVEAL */
/* ================================= */

function setupReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element => {
                element.classList.remove(
                    "hidden"
                );
            }
        );

        return;
    }


    elements.forEach(
        element => {

            if (
                !element.classList.contains(
                    "hero-content"
                )
            ) {

                element.classList.add(
                    "hidden"
                );

            }

        }
    );


    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.remove(
                                "hidden"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* ================================= */
/* PAGE LOAD */
/* ================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createParticles();

        setupReveal();

    }
);
