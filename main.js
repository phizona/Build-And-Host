const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__menu-open')
const navCloseBtn = document.querySelector('.nav__menu-close')

navOpenBtn.addEventListener('click', () =>{
    navMenu.style.display ='flex'
    navOpenBtn.style.display ='none'
    navCloseBtn.style.display ='inline-block'
})

navCloseBtn.addEventListener('click', () =>{
    navMenu.style.display ='none'
    navOpenBtn.style.display ='inline-block'
    navCloseBtn.style.display ='none'
})