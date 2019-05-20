//Java script for web site.

//Social Navigation Menu//

let navOption = document.getElementsByTagName('i');
console.log(navOption[0]['className']);

class socialNav {
    constructor(navSelection) {
        this.navSelection = navSelection;
        console.log(this.navSelection.children[0]['className']);
        this.test = Array.from(this.navSelection.children);
        this.test.forEach(element => {
            element.addEventListener('click', () => this.navSelect(element));
            // console.log(element);
        })
    };

    navSelect(element) {
        // console.log('hello');
        // console.log(element);
        if (element === this.test[0]) {
            window.location.assign('https://www.facebook.com/');
        } else if (element === this.test[1]) {
            window.location.assign('https://www.linkedin.com');
        } else if (element === this.test[2]) {
            window.location.assign('https://www.pinterest.com/');
        } else if (element === this.test[3]) {
            window.location.assign('https://twitter.com/');
        } else if (element === this.test[4]) {
            console.log('today');
        }



    }
}

let navSelection = document.querySelectorAll('.social');
navSelection.forEach(navElement => {
    return new socialNav(navElement);
})

//scrolling menu




//Carousel
var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) {
        slide_index = 1
    }
    if (n < 1) {
        slide_index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}