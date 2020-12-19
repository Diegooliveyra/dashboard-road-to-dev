export default function contador() {
  const curseComplet = document.querySelector('[data-contador="complete"]');
  const coursesInProgress = document.querySelector(
    '[data-contador="progress"]'
  );
  let cont = 1;
  let cont2 = 0;

  const contadorComplet = setInterval(callbackComplet, 200);
  const contadorProgess = setInterval(callbackProgess, 400);
  contadorComplet();

  function callbackProgess() {
    coursesInProgress.innerText = cont2++;
    if (coursesInProgress.innerText >= 4) {
      clearInterval(contadorProgess);
    }
  }

  function callbackComplet() {
    curseComplet.innerText = cont++;
    if (curseComplet.innerText >= 14) {
      clearInterval(contadorComplet);
    }
  }
}
