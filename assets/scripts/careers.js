const orderbtn = document.querySelector('.twolayer .left .job-found button');

orderbtn.addEventListener('click', function() {
    span = this.querySelector('span:last-child');
    span.classList.toggle('active')
})