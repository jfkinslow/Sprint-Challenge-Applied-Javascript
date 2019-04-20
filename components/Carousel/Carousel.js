class Carousel {
    
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        
        this.carouselImages = this.carouselElement.querySelectorAll("div.carousel img");
        console.log(this.carouselImages);
        
        this.currentIndex = 0;
        this.carouselContainer = this.carouselElement.querySelector(".container");
        
        // this.carouselImages[this.currentIndex].style.display = "inline";
        
        this.leftBtn = this.carouselElement.querySelector(".left-button");
        this.rightBtn = this.carouselElement.querySelector(".right-button");
        
        this.leftBtn.addEventListener('click', this.prevImage.bind(this));
        this.rightBtn.addEventListener('click', this.nextImage.bind(this));
        
        this.slider_val = 0;
        this.sliderCount = this.carouselImages.length;
        this.img_width = 1200;


    }
    
    updatePosition() {
        var newLeft = -1 * (this.slider_val * this.img_width);
        this.carouselContainer.style.left = `${newLeft}px`;
    }
    
    prevImage() {
        console.log("Previous Carousel Image");
        this.slider_val--;
        if (this.slider_val < 0)
            this.slider_val = this.sliderCount - 1;
        this.updatePosition();
    }
    
    nextImage() {
        console.log("Next Carousel Image");
        this.slider_val++;
        if (this.slider_val >= this.sliderCount)
            this.slider_val = 0;
        this.updatePosition();
        
    }

}

let carousel = document.querySelector("div.carousel");
carousel = new Carousel(carousel);
// console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
