const image = document.getElementById('img');
const btnLeft = document.getElementById('button_left');
const btnRight = document.getElementById('button_right');

const dots = [
  document.getElementById('dot1'),
  document.getElementById('dot2'),
  document.getElementById('dot3')
];
const links = [
  document.getElementById('first_link'),
  document.getElementById('second_link'),
  document.getElementById('third_link')
];

const details = [
  document.getElementById('completed__city'),
  document.getElementById('completed__area'),
  document.getElementById('completed__time'),
];

let slideNumber = 1;

function showFirst() {
  image.src = './Images/image1.png';

  dots[0].classList.remove('arrows__dot--unactive')
  dots[0].classList.add('arrows__dot--active');
  dots[1].classList.remove('arrows__dot--active')
  dots[1].classList.add('arrows__dot--unactive');
  dots[2].classList.remove('arrows__dot--active')
  dots[2].classList.add('arrows__dot--unactive');

  links[0].classList.remove('navigation__link--unactive');
  links[0].classList.add('navigation__link--active');
  links[1].classList.remove('navigation__link--active');
  links[1].classList.add('navigation__link--unactive');
  links[2].classList.remove('navigation__link--active');
  links[2].classList.add('navigation__link--unactive');

  details[0].innerHTML = 'Rostov-on-Don<br>LCD admiral';
  details[1].innerHTML = '81 m2';
  details[2].innerHTML = '3.5 months';

  slideNumber = 1;
}

function showSecond() {
  image.src = './Images/image2.png';

  dots[0].classList.remove('arrows__dot--active')
  dots[0].classList.add('arrows__dot--unactive');
  dots[1].classList.remove('arrows__dot--unactive')
  dots[1].classList.add('arrows__dot--active');
  dots[2].classList.remove('arrows__dot--active')
  dots[2].classList.add('arrows__dot--unactive');

  links[0].classList.remove('navigation__link--active');
  links[0].classList.add('navigation__link--unactive');
  links[1].classList.remove('navigation__link--unactive');
  links[1].classList.add('navigation__link--active');
  links[2].classList.remove('navigation__link--active');
  links[2].classList.add('navigation__link--unactive');

  details[0].innerHTML = 'Sochi<br>Thieves';
  details[1].innerHTML = '105 m2';
  details[2].innerHTML = '4 months';

  slideNumber = 2;
}

function showThird() {
  image.src = './Images/image3.png';

  dots[0].classList.remove('arrows__dot--active')
  dots[0].classList.add('arrows__dot--unactive');
  dots[1].classList.remove('arrows__dot--active')
  dots[1].classList.add('arrows__dot--unactive');
  dots[2].classList.remove('arrows__dot--unactive')
  dots[2].classList.add('arrows__dot--active');

  links[0].classList.remove('navigation__link--active');
  links[0].classList.add('navigation__link--unactive');
  links[1].classList.remove('navigation__link--active');
  links[1].classList.add('navigation__link--unactive');
  links[2].classList.remove('navigation__link--unactive');
  links[2].classList.add('navigation__link--active');

  details[0].innerHTML = 'Rostov-on-Don<br>Patriotic';
  details[1].innerHTML = '93 m2';
  details[2].innerHTML = '3 months';

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
