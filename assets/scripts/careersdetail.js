


document.addEventListener('click', function(e) {
   

    if(e.target.classList.contains('btnapply')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.add('active'); 
        document.querySelector('.overlay').classList.add('active'); 
    }

    if(e.target.classList.contains('overlay')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.remove('active'); 
        document.querySelector('.overlay').classList.remove('active'); 
    }
   
})



document.querySelector('.closed svg').addEventListener('click', function() {
    document.querySelector('.box-white').classList.remove('active'); 
    document.querySelector('.overlay').classList.remove('active'); 
})