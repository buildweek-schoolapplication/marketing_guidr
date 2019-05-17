//Java script for web site.

//Social Navigation Menu//
class socialNav {
    constructor(navSelection) {
        this.navSelection = navSelection;
        console.log(navSelection);
        this.navOption = navOption;
        console.log(navOption[0]);
        this.navSelection.addEventListener('click', () => this.navSelect());
    };

    navSelect() {
        // console.log('hello');
        if (this.navSelection === this.navOption) {
            console.log('hello');
        }



    }
}




let navOption = document.getElementsByTagName('i');
let navSelection = document.querySelectorAll('.social');
navSelection.forEach(navElement => {
    return new socialNav(navElement);
})