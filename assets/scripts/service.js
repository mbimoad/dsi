const togglebox = document.querySelectorAll('.service-togglebox .boxs .box'); 
let tmp = "";
togglebox.forEach(item => item.addEventListener('click', function() {
    if(!this.classList.contains('closed')) {
        tmp.classList.add('closed');
        return
    }

    if (tmp) {
        console.log("sini");
        tmp.classList.add('closed');
        tmp = ""; 
    }
    if(!tmp) tmp = this; 
    
    this.classList.remove('closed');
    
}))


window.onload = function() {
    if(window.innerWidth <= 570) {
        $('.service-togglebox .icon-boxs').owlCarousel({
            items:1,
            center:true
        })
    }
}
 
