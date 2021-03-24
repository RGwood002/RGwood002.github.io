const navFade = document.getElementById("nav1");

window.addEventListener("scroll", function() {
    if(window.scrollY > 300) {
        nav1.classList.remove('opaque');
        nav1.classList.add('solid');
    } else {
        nav1.classList.add('opaque');
        nav1.classList.remove('solid')
    }
});