const header = document.querySelector('.header')
const about = document.querySelector('.about')
const services = document.querySelector('.services')
const contactBtn = document.querySelector('.contact__btn')


window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;

    if(scrolled>20){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})



window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;

    if(scrolled>350 && scrolled< 1650){
        about.classList.add('active')
    }else{
        about.classList.remove('active')
    }
})
window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;

    if(scrolled>950 && scrolled< 3500){
        services.classList.add('active')
    }else{
        services.classList.remove('active')
    }
})


var typed = new Typed(".typing", {
    strings: ["Youtuber", "Web-Developer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const toggleBtn = document.querySelector('.toggle-button')
const headerMenu = document.querySelector('.header__menu')

toggleBtn.addEventListener('click', ()=>{
  headerMenu.classList.toggle('active')
})
