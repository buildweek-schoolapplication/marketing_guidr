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
        this.detailLink.classList.toggle('change');        // const items = document.querySelectorAll('.tabs-item');
        // // console.log(items);
        // items.forEach(function (items) {
        //     items.classList.remove('jamie-skills-dropdown');
        // });
        
        //     items.forEach(function (items) {
        //         items.classList.remove('jamie-about-dropdown');
        //           })
                //   this.link.classList.add('jamie-about-dropdown');
        // this.detailLink.classList.add('jamie-skills-dropdown');
    }
}

   
 
    




let links = document.querySelectorAll(".about-skills");
links.forEach(function(link) {
    return new Link(link);
});

//  console.log(links);

