const pinImage = document.querySelectorAll('.pinImage');

pinImage.forEach(item => item.addEventListener('click', function() {
    let postmap = this;
    postmap = postmap.previousElementSibling.previousElementSibling;

    postmap.classList.toggle('active');
}))



const pinbtn = document.querySelector('.pinbtn'); 
const pins = document.querySelector('.pins');
pinbtn.addEventListener('click', function() {
    pins.classList.toggle('active');

    let message = ""; 
    if(pins.classList.contains('active')) {
        message = "Show Pin";
    } else {
        message = "Hide Pin";
    }

    this.innerText = message; 
})




$(document).ready( function () {
    $('#myTable').DataTable({
        autoWidth: false, 
        pageLength : 5,
        lengthMenu: [[5, 10, 20], [5, 10, 20]]

    });
    $('#myTable2').DataTable({
        autoWidth: false, 
        pageLength : 5,
        lengthMenu: [[5, 10, 20], [5, 10, 20]]

    });
} );