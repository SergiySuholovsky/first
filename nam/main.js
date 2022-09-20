const menu = document.querySelector('.header-list')
const menuOpen = document.querySelector('.open_menu')
const menuClose = document.querySelector('.close_menu')

menuOpen.onclick = function(){
   menu.classList.add('open')
   menuOpen.classList.add('open')
   menuClose.classList.add('open')
   document.body.style.overflow = 'hidden'
}
menuClose.onclick = function(){
   menu.classList.remove('open')
   menuOpen.classList.remove('open')
   menuClose.classList.remove('open')
   document.body.style.overflow = ''
   
}

