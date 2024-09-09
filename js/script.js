//**************ELEMENT*******************//
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Html Developer', 'Web Designer'],
    typeSpeed: 50,
});

//**************NAVBAR ACTIVE*******************//
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

//********************SLIDER*********************//
var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 38,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
