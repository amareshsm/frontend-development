const $burger = document.querySelector(".burger");
const $navLinks = document.querySelector(".nav-links");
console.log($navLinks.children)
const $navLinks_ = document.querySelectorAll(".nav-links li",".nav-links a button");
$burger.onclick = () => {
    $navLinks.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");
    $navLinks_.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5+0.5}s`;
        }
    });
};

const items = document.querySelectorAll('.slider-images');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);