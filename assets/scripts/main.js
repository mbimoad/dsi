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
    let scroll = this.scrollY;
    if(scroll > 530) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
});

let current = 0; 
let isfilled = false; 
if(window.innerWidth > 785) {
    document.querySelectorAll('header ul li').forEach((item, index) => item.addEventListener('mouseover', function() {
    this.querySelector('.sub-menu').classList.add('active');
    this.querySelector('svg').classList.add('active');
    }))

    document.querySelectorAll('header ul li').forEach((item, index) => item.addEventListener('mouseout', function() {
        this.querySelector('.sub-menu').classList.remove('active');
        this.querySelector('svg').classList.remove('active');
    }))
} else {
  
    document.querySelectorAll('header ul li').forEach((item, index) => item.addEventListener('click', function() {
        
        if(this.querySelector('.sub-menu').classList.contains('active')) {
            this.querySelector('.sub-menu').classList.remove('active');
            this.querySelector('svg').classList.remove('active');
        } else {
            document.querySelectorAll('header ul li').forEach(item => {
                item.querySelector('.sub-menu').classList.remove('active');
                item.querySelector('svg').classList.remove('active');
            })
    
            this.querySelector('.sub-menu').classList.add('active');
            this.querySelector('svg').classList.add('active');
        }

     
    }))
}

console.log($(document))


$('.owl1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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