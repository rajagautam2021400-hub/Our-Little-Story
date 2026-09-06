function scrollToSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function openStory() {
    scrollToSection("story");
}


function goToMemories() {
    scrollToSection("memories");
}


function goToNext() {
    scrollToSection("photo-gallery");
}
function goToLetterNext() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}

function goToFinal() {
    scrollToSection("photo-gallery");
}
function goToFinalScene() {

    document.getElementById("final").scrollIntoView({
        behavior: "smooth"
    });

}


function replayStory() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
function openPhoto(image) {
    const lightbox = document.getElementById("photoLightbox");
    const largePhoto = document.getElementById("largePhoto");

    largePhoto.src = image.src;
    lightbox.classList.add("active");
}

function closePhoto() {
    document.getElementById("photoLightbox").classList.remove("active");
}
