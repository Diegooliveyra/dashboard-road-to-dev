import * as conf from "./courses.js";

export default (navCourses) => {
  const navCoursesList = document.querySelectorAll('[data-curses="nav"] li');
  const courses = document.querySelector("[data-courses]");
  let courseElMarkup, courseEl;

  const selectCourses = {
    "All Courses": allCourses,
    "The Newest": theNewest,
    "Top Rated": topCourses,
    "Most Popular": mostPopular,
  };

  allCourses();

  function createItemlist(course) {
    courseEl = document.createElement("li");
    courseEl.classList.add("list-active");
    let courseElMarkup2 = `
    <img src="../public/assets/${course.logo}" alt="logo curso figma">
  <div class="athor">
    <h4 class="title-medium">${course.course}</h4>
    <p>by ${course.teacher}</p>
  </div>
  <div class="hours">
    <img src="../public/assets/clock.svg" alt="relogio duração curso">
    <p>${course.duration}</p>
  </div>
  <div class="rated">
    <img src="../public/assets/burn.svg" alt="avaliação do curso">
    <p>${course.rated}</p>
  </div>
  <button class="btn btn--white">Continue</button>
`;
    courseEl.innerHTML = courseElMarkup2;
    return courses.append(courseEl);
  }

  function allCourses() {
    conf.listCourses.forEach((course, index) => {
      createItemlist(course);
    });
  }

  function topCourses() {
    conf.listCourses.forEach((course, index) => {
      if (course.tab === "top") {
        createItemlist(course);
      }
    });
  }

  function theNewest() {
    conf.listCourses.forEach((course, index) => {
      if (course.tab === "new") {
        createItemlist(course);
      }
    });
  }

  function mostPopular() {
    conf.listCourses.forEach((course, index) => {
      if (course.tab === "pop") {
        createItemlist(course);
      }
    });
  }
  

  // Funçoes navegação

  function cleanList() {
    navCoursesList.forEach((item) => {
      if (item.classList.value === "active") {
        item.classList.value = "";
      }
    });
  }

  navCoursesList.forEach((item, index) => {
    item.addEventListener("click", function () {
      cleanList();
      item.classList.add("active");
      courses.innerHTML = "";
      selectCourses[item.innerText]();
    });
  });
};
