//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika pizza menu di klik

document.querySelector("#pizza-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//  klik diluar slidebar untuk menghilangkan nav
const pizza = document.querySelector("#pizza-menu");

document.addEventListener("click", function (e) {
  if (!pizza.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
