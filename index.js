const image = document.getElementById('img');
const btnLeft = document.getElementById('button_left');
const btnRight = document.getElementById('button_right');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

let slideNumber = 1;

function showFirst() {
  image.src = './Images/image1.png';
  dot1.classList.remove('arrows__dot--unactive')
  dot1.classList.add('arrows__dot--active');
  dot2.classList.remove('arrows__dot--active')
  dot2.classList.add('arrows__dot--unactive');
  dot3.classList.remove('arrows__dot--active')
  dot3.classList.add('arrows__dot--unactive');
  slideNumber = 1;
}

function showSecond() {
  image.src = './Images/image2.png';
  dot1.classList.remove('arrows__dot--active')
  dot1.classList.add('arrows__dot--unactive');
  dot2.classList.remove('arrows__dot--unactive')
  dot2.classList.add('arrows__dot--active');
  dot3.classList.remove('arrows__dot--active')
  dot3.classList.add('arrows__dot--unactive');
  slideNumber = 2;
}

function showThird() {
  image.src = './Images/image3.png';
  dot1.classList.remove('arrows__dot--active')
  dot1.classList.add('arrows__dot--unactive');
  dot2.classList.remove('arrows__dot--active')
  dot2.classList.add('arrows__dot--unactive');
  dot3.classList.remove('arrows__dot--unactive')
  dot3.classList.add('arrows__dot--active');
  slideNumber = 3;
}

function slideLeft() {
  if (slideNumber === 1) {
    showThird();
  } else if (slideNumber === 2) {
    showFirst();
  } else {
    showSecond();
  }
}

function slideRight() {
  if (slideNumber === 3) {
    showFirst();
  } else if (slideNumber === 2){
    showThird();
  } else {
    showSecond();
  }
}

btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", slideLeft);
