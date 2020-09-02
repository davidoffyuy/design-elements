function scrollSlider(images, divId, options) {
  if (images.length >= 1) {
    this.images = images.map((image, index) => {
      const newImage = new Image();

      newImage.src = image;
      newImage.setAttribute('id', 'image' + index);
      if (this.fit) {
        newImage.classList.add('fit');
      }
      return newImage;
    });
  }

  this.activeIndex = 0;
  this.parentDiv = document.querySelector('#' + divId);
  this.scrollSlideDiv = document.createElement('div');
  this.scrollSlideDiv.classList.add('scroll-slider')
  this.parentDiv.appendChild(this.scrollSlideDiv);

  this.init = function() {
    this.displayImages();
    this.displayArrows();
  }

  this.displayImages = function() {
    for (let i = 0; i < this.images.length; i++) {
      if (i === this.activeIndex) {
        this.images[i].classList.add('show');
      }
      this.scrollSlideDiv.appendChild(this.images[i]);
    }
  }

  this.displayArrows = function() {
    const leftArrowDiv = document.createElement('div');
    const rightArrowDiv = document.createElement('div');

    leftArrowDiv.classList.add('scroll-slider__button');
    leftArrowDiv.classList.add('scroll-slider__button--left');

    rightArrowDiv.classList.add('scroll-slider__button');
    rightArrowDiv.classList.add('scroll-slider__button--right');

    leftArrowDiv.addEventListener('click', (event) => {this.slideLeftHandler();});
    rightArrowDiv.addEventListener('click', (event) => {this.slideRightHandler();});

    leftArrowDiv.innerHTML = '&#10094;';
    rightArrowDiv.innerHTML = '&#10095;';

    this.scrollSlideDiv.appendChild(leftArrowDiv);
    this.scrollSlideDiv.appendChild(rightArrowDiv);
    this.checkBoundaries();
  }

  this.slideLeftHandler = function() {
    if (this.activeIndex > 0) {
      document.querySelector('#image' + this.activeIndex).classList.remove('show');
      this.activeIndex -= 1;
      setTimeout(() => {
        document.querySelector('#image' + this.activeIndex).classList.add('show');
      }, 250)

    }
    this.checkBoundaries();
  }

  this.slideRightHandler = function() {
    if (this.activeIndex < this.images.length - 1) {
      document.querySelector('#image' + this.activeIndex).classList.remove('show');
      this.activeIndex += 1;
      setTimeout(() => {
        document.querySelector('#image' + this.activeIndex).classList.add('show');
      }, 300)
    }
    this.checkBoundaries();
  }

  this.checkBoundaries = function() {
    console.log('check boundaries');
    if (this.activeIndex === 0) {
      document.querySelector('.scroll-slider__button--left').classList.add('scroll-slider__button--hidden');
    }
    else if (this.activeIndex === this.images.length - 1) {
      document.querySelector('.scroll-slider__button--right').classList.add('scroll-slider__button--hidden');
    }
    else {
      document.querySelector('.scroll-slider__button--left').classList.remove('scroll-slider__button--hidden');
      document.querySelector('.scroll-slider__button--right').classList.remove('scroll-slider__button--hidden');
    }
  }

}