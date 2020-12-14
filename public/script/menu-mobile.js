export default function menuMobile() {
  const btnBurger = document.querySelector("[data-burgermenu]");
  const navMenu = document.querySelector("[data-navMenu]");
  const menuUl = document.querySelector("[data-navMenu] ul");
  const allLinksMenu = document.querySelectorAll("[data-navMenu] ul li a");
  console.log(allLinksMenu);

  function menuOpen() {
    btnBurger.classList.toggle("menu-btn-open");
    navMenu.classList.toggle("menu-ativo");
    menuUl.classList.toggle("nav-mobile");
  }

  allLinksMenu.forEach((link) => {
    link.addEventListener("click", menuOpen);
  });

  btnBurger.addEventListener("click", menuOpen);
}
