const button = document.querySelector('.headerBlog-menu--mobile');
const MenuResponsive = document.querySelector('.responsiveMenu');
const active = document.querySelector('.is-active')
const closeBtn = document.querySelector('.responsiveMenu-close');

button.addEventListener('click', function(){
    MenuResponsive.classList.add('is-active');
})

closeBtn.addEventListener('click', function(){
    MenuResponsive.classList.remove('is-active');
})