export default function navCourses() {
  const navCoursesList = document.querySelectorAll('[data-curses="nav"] li');

  function cleanList() {
    navCoursesList.forEach((item) => {
      if (item.classList.value === "active") {
        item.classList.value = "";
      }
    });
  }

  navCoursesList.forEach((item) => {
    item.addEventListener("click", function () {
      cleanList();
      item.classList.add("active");
    });
  });

}
