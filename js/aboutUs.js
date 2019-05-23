// class Pulldown {
//     constructor(icon) {
//         this.icon = icon;
//         console.log(this.icon);
//         this.click = document.querySelectorAll('a');
//         console.log(this.click);
//         this.icon.addEventListener('click', this.expandPulldown.bind(this));
//     }
//     expandPulldown() {
//         // Using our reference to the domElement, toggle a class to expand or hide the article.
//     this.click.classList.toggle('li');
//       }
// }


// let icon = document.querySelectorAll('.icon');
// console.log(icon);
// icon.forEach(function(icon) {
//     return new Pulldown(icon);
//     });

var li = document.querySelector('.li');
document.querySelector('.icon').addEventListener('click', openMenu);

function openMenu() {
   
    document.getElementById("ul").classList.toggle('active')
}

class Link {
    constructor(link) {
        this.link = link;
        //  console.log(this.link);
        this.data = this.link.dataset.link;
        console.log(this.data);
        this.detail = document.querySelector(`.tabs-item[data-link="${this.data}"]`);
         console.log(this.detail);
        this.linkDetail = new LinkDetail(this.detail);
    // console.log(this.linkDetail);
    this.link.addEventListener('click', () => this.linkClick());
}
        
        linkClick() {
            this.linkDetail.toggleContent();
            
                    }
    }

    class LinkDetail {
    constructor(detail) {
    this.detailLink = detail;
    console.log(this.detailLink);

    }
    
    toggleContent() {
        this.detailLink.classList.toggle('change');       
       
    }
}




let links = document.querySelectorAll(".about-skills");
links.forEach(function(link) {
    return new Link(link);
});

//  console.log(links);

