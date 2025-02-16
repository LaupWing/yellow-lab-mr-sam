const images = document.querySelectorAll("#gallery img")

images.forEach((image) => {
    const reset = () => {
        images.forEach((image) => {
            image.style.opacity = 1
        })
    }

    const changeOpacity = () => {
        images.forEach((image) => {
            image.style.opacity = 0.7
        })
    }

    image.addEventListener("mouseover", () => {
        changeOpacity()
        image.style.opacity = 1
    })

    image.addEventListener("mouseout", () => {
        reset()
    })
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.add("scrolled")
    } else {
        document.body.classList.remove("scrolled")
    }
})
