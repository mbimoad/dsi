document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        console.log("Still load");
        //  document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        console.log("Kesini");
        // setTimeout(function(){
        // //    document.getElementById('interactive');
        // //    document.getElementById('load').style.visibility="hidden";
        // //    document.getElementById('contents').style.visibility="visible";
        // },1000);
    } else {
        console.log("Still load");
    }
  }

if(window.innerWidth <= 550) {
    $('.owlproject').owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        // nav:true,
        // dots:true,
    })
}

if(window.innerWidth <= 785) {
    document.querySelectorAll('.sub-menu').forEach(item => item.classList.add('active'));
}

// debug
if(window.innerWidth > 785) {

    document.querySelectorAll('header ul li').forEach((item, index) => item.addEventListener('mouseover', function() {
    this.querySelector('.sub-menu').classList.add('active');
    this.querySelector('svg').classList.add('active');
    }))

    document.querySelectorAll('header ul li').forEach((item, index) => item.addEventListener('mouseout', function() {
        this.querySelector('.sub-menu').classList.remove('active');
        this.querySelector('svg').classList.remove('active');
    }))
} 
// debug


document.querySelector('.navigation li:first-child .sub-menu a:first-child').setAttribute('href', './about.html');
document.querySelector('.navigation li:first-child .sub-menu a:nth-child(2)').setAttribute('href', './mission.html');
document.querySelector('.navigation li:first-child .sub-menu a:nth-child(3)').setAttribute('href', './bod.html');
document.querySelector('.navigation li:first-child .sub-menu a:nth-child(4)').setAttribute('href', './news.html');


document.querySelector('.navigation li:nth-child(2) .sub-menu a:first-child').setAttribute('href', './business.html');
document.querySelector('.navigation li:nth-child(2) .sub-menu a:nth-child(2)').setAttribute('href', './project.html');
document.querySelector('.navigation li:nth-child(2) .sub-menu a:nth-child(3)').setAttribute('href', './services.html');


document.querySelector('.navigation li:nth-child(3) .sub-menu a:first-child').setAttribute('href', './careers.html');
document.querySelector('.navigation li:nth-child(3) .sub-menu a:nth-child(2)').setAttribute('href', './contactus.html');
document.querySelector('.navigation li:nth-child(3) .sub-menu a:nth-child(3)').setAttribute('href', './login.html');

//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});


//Navigation bar effects on scroll

//Responsive navigation menu toggle
const navmenu = document.querySelector('.nav-menu-btn');
const navigation = document.querySelector('.navigation');
navmenu.addEventListener('click', function() {
    navigation.classList.toggle('active');
})



window.addEventListener("scroll", (event) => {
    if(window.innerWidth >= 785) {
        let scroll = this.scrollY;
        if(scroll > 400) {
            document.querySelector('header').classList.add('active');
        } else {
            document.querySelector('header').classList.remove('active');
        }
    }
});

let current = 0; 
let isfilled = false; 






$('.owl1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0: {
            items:1,
        },
        785:{
            items:2
        },
        941: {
            item: 3
        }
    }
})


$('.owl2').owlCarousel({
   
    responsive: {
        1000: {
            center: true,
            items:3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 6000,
            autoplaySpeed: 6000,
            autoplayHoverPause: true,
            
            autoWidth:true,
            margin: 120,
        },

        550: {
            center: true,
            items:3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 6000,
            autoplaySpeed: 6000,
            autoplayHoverPause: true,


            autoWidth:true,
            margin: 90,
        }, 0: {
            items: 1,
            autoWidth: false, 

        }
    }
    // responsive:{
    //     0: {
    //         items:1,
    //     },
    //     785:{
    //         items:2
    //     },
    //     941: {
    //         item: 3
    //     }
    // }
})

$('.owl3').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    autoWidth:true,
    margin: 120,
})


