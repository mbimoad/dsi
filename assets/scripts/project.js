function GetDate() {
    // Create a new Date object for the current date
    var currentDate = new Date();

    // Array of month names
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];

    // Get the day, month, and year
    var day = currentDate.getDate();
    var monthIndex = currentDate.getMonth();
    var year = currentDate.getFullYear();

    // Format the date
    var formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year;

    document.querySelector('.timestamp .date span:last-child').innerText = formattedDate; 
}


function GetTime() {
    // Create a new Date object for the current time
    var currentTime = new Date();

    // Get the hour, minute, and second
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    // Add leading zeros if needed
    hour = (hour < 10 ? "0" : "") + hour;
    minute = (minute < 10 ? "0" : "") + minute;
    second = (second < 10 ? "0" : "") + second;

    // Format the time
    var formattedTime = hour + ":" + minute + ":" + second + " WIB";

    document.querySelector('.timestamp .time span:last-child').innerText = formattedTime; 

}

setInterval(() => {
    GetTime();
}, 1000)

GetDate();



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