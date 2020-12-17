export default function contador() {
  const curseComplet = document.querySelector('[data-contador="complete"]');
  const coursesInProgress = document.querySelector('[data-contador="progress"]')
  let cont = 1;

  function contar() {
    setTimeout(function () {
      curseComplet.innerText = cont++;
      coursesInProgress.innerText = cont++
      cont <= 13 ? contar() : "";
    }, 300);
  }

  contar();
}
