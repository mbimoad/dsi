const togglebox = document.querySelectorAll('.service-togglebox .boxs .box'); 

togglebox.forEach(item => item.addEventListener('click', function() {
    this.classList.toggle('closed');
}))