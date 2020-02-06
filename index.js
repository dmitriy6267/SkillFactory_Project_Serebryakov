
const image = document.getElementById('img');
const m_image = document.getElementById("m_img");
const link = document.querySelectorAll('.navigation__link');
const dot = document.querySelectorAll('.arrows__dot');
const text = document.querySelectorAll('.details__text');

const data = [
  {
    img: './Images/image1.png',
    city: 'Rostov-on-Don<br>LCD admiral',
    area: '81.5 m2<br>&nbsp',
    time: '3.5 months'
  },
  {
    img: './Images/image2.png',
    city: 'Sochi<br>Thieves',
    area: '105 m2<br>&nbsp',
    time: '4 month'
  },
  {
    img: './Images/image3.png',
    city: 'Rostov-on-Don<br>Patriotic',
    area: '93 m2<br>&nbsp',
    time: '3 month'
  }
];

let slideNumber = 0;

function isActive (index) {
  return  (dot[index].classList.contains('dot__active'));
};

function changeActiveLink (index) {
  for (let i=0; i<3; i++) {
    if  (!isActive(i) && i === index) {
      dot[index].classList.toggle('dot__active');
      link[index].classList.toggle('link__active');
    } else {
      dot[i].classList.remove('dot__active');
      link[i].classList.remove('link__active');
    };
  };
};

function showSlide(index) {
  image.src = data[index].img;
  m_image.src = data[index].img;
  text[0].innerHTML = data[index].city;
  text[1].innerHTML = data[index].time;
  text[2].innerHTML = data[index].area;
  changeActiveLink(index);
  slideNumber = index;
};

function slideLeft() {
  if (slideNumber === 0) {
    showSlide(2);
  } else if (slideNumber === 1) {
    showSlide(0);
  } else {
    showSlide(1);
  };
};

function slideRight() {
  if (slideNumber === 2) {
    showSlide(0);
  } else if (slideNumber === 1){
    showSlide(2);
  } else {
    showSlide(1);
  }
};
