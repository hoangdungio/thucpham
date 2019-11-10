var count_slide = document.querySelectorAll('.slide .count-slide div');
var slide = document.querySelectorAll('.slide img');

count_slide[0].onclick = function(){
    slide[2].classList.toggle('chuyen-slide');
}

count_slide[1].onclick = function(){
    slide[2].classList.toggle('chuyen-slide');
}
slide[0].onclick = function(){
    slide[2].classList.toggle('chuyen-slide');
}

setInterval(function(){
    slide[2].classList.toggle('chuyen-slide');
},7000)



// khi an vao nut se chuyen len phan dau trang
var top_top = document.querySelector('.scroll-top');
window.addEventListener('scroll',function(){
    if(window.scrollY<1000)
    top_top.style.visibility = 'hidden';
    if(window.scrollY>1000)
    top_top.style.visibility = 'visible';
})

top_top.onclick = function(){
    window.scrollTo({top : 0, behavior : 'smooth'});
}

// khi an vao menu-mobie thi menu se di ra
var menu_mobie = document.querySelector('.menu-mobie .fa-bars');
var menu_mobie_go_out = document.querySelector('.menu-mobie-go-out');
var nut_an = document.querySelector('.menu-mobie-go-out i');
menu_mobie.onclick = function(){
    menu_mobie_go_out.style.transform = 'translateX' +'('+0+')';
}
nut_an.onclick = function(){
    menu_mobie_go_out.style.transform = 'translateX' +'(-100%)';
}