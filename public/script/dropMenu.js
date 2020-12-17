export default function dropMenu () {
    const menu = document.querySelector('[data-dropmenu="menu"]')
    const btnDropMenu = document.querySelector('[data-dropmenu="btn"]')
    const btnArrow = document.querySelector('[data-dropmenu="btn"] img')

    

    function openMenu() {
        menu.classList.toggle('active')
        if(!menu.classList.contains('active')){
            console.log('ola')
             btnArrow.setAttribute('src', '../public/assets/arrow_down.svg')
        } else {
             btnArrow.setAttribute('src', '../public/assets/arrow_up.svg')
        }
    }

    btnDropMenu.addEventListener('click', openMenu)
}