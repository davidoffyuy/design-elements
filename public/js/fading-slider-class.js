// Basic Slider methods
// INPUTS
// images: an array of image URL's
// divId: name of div where the image slider will be generated.
// options:
//  value "fit" will cause images to fit in the available space.

function basicSlider(images, divId, options) {
  // Handling options
  if (options && options.fit) {
    this.fit = true;
  }

  // Load images to instance
  // Handles an array of image URL's along with a single string.
  if (images.length >= 1) {
    this.images = images.map((image, index) => {
      const newImage = new Image();

      newImage.src = image;
      newImage.setAttribute('id', divId + 'image' + index);
      if (this.fit) {
        newImage.classList.add('fit');
      }
      return newImage;
    });
  }
  else {
    console.error('Error: no images provided');
  }

  this.activeIndex = 0;
  this.parentDiv = document.querySelector('#' + divId);
  this.basicSlideDiv = document.createElement('div');
  this.basicSlideDiv.classList.add('basic-slider')
  this.parentDiv.appendChild(this.basicSlideDiv);

  this.init = function() {
    this.displayImages();
    this.displayArrows();
  }

  this.displayArrows = function() {
    const leftArrowDiv = document.createElement('div');
    const rightArrowDiv = document.createElement('div');

    leftArrowDiv.classList.add('basic-slider__button');
    leftArrowDiv.classList.add('basic-slider__button--left');

    rightArrowDiv.classList.add('basic-slider__button');
    rightArrowDiv.classList.add('basic-slider__button--right');

    leftArrowDiv.addEventListener('click', (event) => {this.slideLeftHandler();});
    rightArrowDiv.addEventListener('click', (event) => {this.slideRightHandler();});

    leftArrowDiv.innerHTML = '&#10094;';
    rightArrowDiv.innerHTML = '&#10095;';

    this.basicSlideDiv.appendChild(leftArrowDiv);
    this.basicSlideDiv.appendChild(rightArrowDiv);
    this.checkBoundaries();
  }

  this.displayImages = function() {
    for (let i = 0; i < this.images.length; i++) {
      if (i === this.activeIndex) {
        this.images[i].classList.add('show');
      }
      this.basicSlideDiv.appendChild(this.images[i]);
    }
  }

  this.slideLeftHandler = function() {
    if (this.activeIndex > 0) {
      document.querySelector("#" + divId + 'image' + this.activeIndex).classList.remove('show');
      this.activeIndex -= 1;
      setTimeout(() => {
        document.querySelector("#" + divId + 'image' + this.activeIndex).classList.add('show');
      }, 250)

    }
    this.checkBoundaries();
  }

  this.slideRightHandler = function() {
    if (this.activeIndex < this.images.length - 1) {
      document.querySelector("#" + divId + 'image' + this.activeIndex).classList.remove('show');
      this.activeIndex += 1;
      setTimeout(() => {
        document.querySelector("#" + divId + 'image' + this.activeIndex).classList.add('show');
      }, 300)
    }
    this.checkBoundaries();
  }

  // Function to determine whether to show left/right arrows
  this.checkBoundaries = function() {
    console.log('check boundaries');
    if (this.activeIndex === 0) {
      document.querySelector('.basic-slider__button--left').classList.add('basic-slider__button--hidden');
    }
    else if (this.activeIndex === this.images.length - 1) {
      document.querySelector('.basic-slider__button--right').classList.add('basic-slider__button--hidden');
    }
    else {
      document.querySelector('.basic-slider__button--left').classList.remove('basic-slider__button--hidden');
      document.querySelector('.basic-slider__button--right').classList.remove('basic-slider__button--hidden');
    }
  }
}