const card = document.querySelectorAll('.cards .card'); 
console.log(card)

const cards = document.querySelector('.cards'); 
if(window.innerWidth <= 785) {
    cards.classList.add('owl-carousel');
    cards.classList.add('owl-theme');
    cards.classList.add('owl4');

    
}

$('.owl4').owlCarousel({
    items:1,
})

if(window.innerWidth > 785) {
    card.forEach(item => item.addEventListener('mouseover', function() {
        this.classList.add('hover-transition');
        this.classList.remove('unhover-transition');
    
    
    }))
    card.forEach(item => item.addEventListener('mouseout', function() {
        this.classList.add('unhover-transition');
        this.classList.remove('hover-transition');
    }))
}


