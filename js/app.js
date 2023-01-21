const Navbar = document.querySelector(".header-open-navbar"),
  closeBtn = document.querySelector(".navbar-open-close__img"),
  openBtn = document.querySelector(".navbar-open__img"),
  nav = document.querySelector(".site-nav"),
  header = document.querySelector(".header"),
  main = document.querySelector(".main-before");

Navbar.style.height = `100vh - ${getComputedStyle(header).height}`;
openBtn.addEventListener("click", function (event) {
  event.preventDefault();
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  Navbar.style.display = "flex";
  main.style.display = "block";
});
closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  Navbar.style.display = "none";
  main.style.display = "none";
});
setInterval(function () {
  if (getComputedStyle(nav).display == "block") {
    Navbar.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    main.style.display = `none`;
  }
}, 100);
const img = document.querySelectorAll(".site-footer-wrapper__img");

img[0].addEventListener("mousemove", function (e) {
  e.preventDefault();
  img[0].src = "./../images/Path-active.svg";
});
img[1].addEventListener("mousemove", function (e) {
  e.preventDefault();
  img[1].src = "./../images/Path-1-active.svg";
});
img[2].addEventListener("mousemove", function (e) {
  e.preventDefault();
  img[2].src = "./../images/Path-active.svg";
});
img[0].addEventListener("mouseout", function (e) {
  e.preventDefault();
  img[0].src = "./../images/Path.svg";
});
img[1].addEventListener("mouseout", function (e) {
  e.preventDefault();
  img[1].src = "./../images/Path-1.svg";
});
img[2].addEventListener("mouseout", function (e) {
  e.preventDefault();
  img[2].src = "./../images/Path.svg";
});

const span1 = document.querySelector(".faqs-wrapper__img--one"),
  span2 = document.querySelector(".faqs-wrapper__img--two"),
  span3 = document.querySelector(".faqs-wrapper__img--three"),
  span4 = document.querySelector(".faqs-wrapper__img--four"),
  span5 = document.querySelector(".faqs-wrapper__img--five"),
  span6 = document.querySelector(".faqs-wrapper__img--six"),
  text1 = document.querySelector(".faqs-wrapper__decr--one"),
  text2 = document.querySelector(".faqs-wrapper__decr--two"),
  text3 = document.querySelector(".faqs-wrapper__decr--three"),
  text4 = document.querySelector(".faqs-wrapper__decr--four"),
  text5 = document.querySelector(".faqs-wrapper__decr--five"),
  text6 = document.querySelector(".faqs-wrapper__decr--six"),
  item1 = document.querySelector(".faqs-wrapper__item--one"),
  item2 = document.querySelector(".faqs-wrapper__item--two"),
  item3 = document.querySelector(".faqs-wrapper__item--three"),
  item4 = document.querySelector(".faqs-wrapper__item--four"),
  item5 = document.querySelector(".faqs-wrapper__item--five"),
  item6 = document.querySelector(".faqs-wrapper__item--six");

item1.addEventListener("click", function () {
  if (getComputedStyle(text1).display == "none") {
    text1.style.display = "block";
    span1.src = "./images/about/top-img.svg";
  } else {
    text1.style.display = "none";
    span1.src = "./images/about/bottom-img.svg";
  }
});
item2.addEventListener("click", function () {
  if (getComputedStyle(text2).display == "none") {
    text2.style.display = "block";
    span2.src = "./images/about/top-img.svg";
  } else {
    text2.style.display = "none";
    span2.src = "./images/about/bottom-img.svg";
  }
});
item3.addEventListener("click", function () {
  if (getComputedStyle(text3).display == "none") {
    text3.style.display = "block";
    span3.src = "./images/about/top-img.svg";
  } else {
    text3.style.display = "none";
    span3.src = "./images/about/bottom-img.svg";
  }
});
item4.addEventListener("click", function () {
  if (getComputedStyle(text4).display == "none") {
    text4.style.display = "block";
    span4.src = "./images/about/top-img.svg";
  } else {
    text4.style.display = "none";
    span4.src = "./images/about/bottom-img.svg";
  }
});
item5.addEventListener("click", function () {
  if (getComputedStyle(text5).display == "none") {
    text5.style.display = "block";
    span5.src = "./images/about/top-img.svg";
  } else {
    text5.style.display = "none";
    span5.src = "./images/about/bottom-img.svg";
  }
});
item6.addEventListener("click", function () {
  if (getComputedStyle(text6).display == "none") {
    text6.style.display = "block";
    span6.src = "./images/about/top-img.svg";
  } else {
    text6.style.display = "none";
    span6.src = "./images/about/bottom-img.svg";
  }
});
