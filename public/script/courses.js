export default function coursesList(){
  
  const allCouser = [
    {
      logo: 'logo_figma.svg',
      course: 'Learn Figma',
      teacher: 'Christopher Morgan',
      duration: '6h 30min',
      rated: 4.9
    },
    {
      logo: 'logo_instagran.svg',
      course: 'Learn Figma',
      teacher: 'Christopher Morgan',
      duration: '6h 30min',
      rated: 4.9
    },
  ];




  // create course
function createCourse() {


  const courses = document.querySelector('[data-courses]')
  const courseEl = document.createElement("li");

  for(var course of allCouser) {
    const courseElMarkup = `
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
    
    courseEl.innerHTML = courseElMarkup;
    console.log(courseEl)
    courses.append(courseEl);
  }

  
  
}
createCourse()
};

