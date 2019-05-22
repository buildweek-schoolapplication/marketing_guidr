const icons = document.querySelectorAll(".icon");
console.log(icons);



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

