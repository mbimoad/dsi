window.addEventListener("scroll", (event) => {
    if(window.innerWidth < 785) {
        let scroll = this.scrollY;
        if(scroll > 300) {
            document.querySelector('header').classList.add('active');
        } else {
            document.querySelector('header').classList.remove('active');
        }
    }
    });