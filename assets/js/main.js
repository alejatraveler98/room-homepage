const toggle= document.getElementById('toggle');
const nav = document.getElementById('main-nav__list')
const close= document.getElementById('icon-close')
const l= document.getElementById('main-nav__container')

toggle.addEventListener('click',()=>{
    console.log('Click');
    nav.classList.add('main-nav__list')
    l.classList.add('main-nav__container')
    l.classList.remove('display')
});

close.addEventListener('click',()=>{
    nav.classList.remove('main-nav__list')
    l.classList.add('display')
});