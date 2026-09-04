function openStory() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}

function goToMemories() {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
}

```javascript
function goToNext() {

    const gallery = document.getElementById("photo-gallery");

    if (gallery) {
        gallery.scrollIntoView({
            behavior: "smooth"
        });
    }

}
```

```javascript
function goToFinal() {

    document.getElementById("photo-gallery").scrollIntoView({
        behavior: "smooth"
    });

}
```
