


document.addEventListener('click', function(e) {
   

    if(e.target.classList.contains('btnapply')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.toggle('active'); 
        document.querySelector('.overlay').classList.toggle('active'); 
    }

    if(e.target.classList.contains('overlay')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.toggle('active'); 
        document.querySelector('.overlay').classList.toggle('active'); 
    }
})


