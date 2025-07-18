/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    
    menuIcon.classList.remove('bx-x');
    navber.classList.remove('active');


};





/*==================== scroll reveal ====================*/
ScrollReveal({ 
    /*reset: true,*/
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });





/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings:['web developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
