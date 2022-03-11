window.onscroll = () => {
    if(this.scrollY > 100){
        document.querySelector(".up").style.display = "block";
    }
    else{
        document.querySelector(".up").style.display = "none";
    }
}

let show = false;

const openNav = () => {
    document.querySelector(".mobile-nav-wrap").style.display = "block";
    document.body.style.overflow = "hidden";
}

const closeNav = () => {
    document.querySelector(".mobile-nav-wrap").style.display = "none";
    document.body.style.overflow = "auto";
}

const scrollUp = () => {
    document.querySelector(".contact-top").scrollIntoView({
        behavior: "smooth"
    });
}

const DropDown = (element, elem) => {
    if(show == false){
        document.querySelector('.' + element).style.display = "block";
        document.getElementById(elem).style.transform = "rotate(180deg)";
        show = true;
    }
    else{
        document.querySelector('.' + element).style.display = "none";
        document.getElementById(elem).style.transform = "rotate(0deg)";
        show = false;
    }
}