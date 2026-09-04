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


function goToFinal() {
    scrollToSection("photo-gallery");
}
