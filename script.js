const slides = document.querySelector(".slide"),
 next = document.querySelector(".next"),
 previous = document.querySelector(".previous"),
 autoScroll = true;


let slideInterval;
let intervalTime = 2000


const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current")
    }
    else {
        slides.classList.add("current")
    }
    current.classList.remove("current");
}

//Previouse button
const previousSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current")
    }
    else {
        slides[slides.length - 1].classList.add("current")
    }
    current.classList.remove("current");
}

//add event listenesers

next.addEventListener("click", () => {
    nextSlide();
    if (autoScroll) {
        clearInterval(slideInterval);
        auto();
    }
})


previous.addEventListener("click", () => {
    previousSlide();
    if (autoScroll) {
        clearInterval(slideInterval);
        auto();
    }
})


//auto scroll

if (autoScroll) {

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    auto()
    
}