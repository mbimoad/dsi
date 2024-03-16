
const changeDescription = () => {
    active = document.querySelector('.carousel-item.active'); 
    console.log(active);
    switch(active.dataset.employee) {
        case "1": 
          document.querySelector('.bod-info h3').innerText = "Son Goku";
          document.querySelector('.bod-info h5').innerText = "Super Saiyan 1"
          // document.querySelector('.bod-info p').innerText = "Super Saiyan 1"
          break;
        case "2": 
          document.querySelector('.bod-info h3').innerText = "Son Gohan";
          document.querySelector('.bod-info h5').innerText = "Super Saiyan 1"
          // document.querySelector('.bod-info p').innerText = "Super Saiyan 1"
          break;
        case "3": 
          document.querySelector('.bod-info h3').innerText = "Vegeta";
          document.querySelector('.bod-info h5').innerText = "Super Saiyan Grade 2"
          // document.querySelector('.bod-info p').innerText = "Super Saiyan 1"
          break;
        case "4": 
          document.querySelector('.bod-info h3').innerText = "Broly";
          document.querySelector('.bod-info h5').innerText = "Legendary Super Saiyan"
          // document.querySelector('.bod-info p').innerText = "Super Saiyan 1"
          break;
        case "5": 
          document.querySelector('.bod-info h3').innerText = "Frieza";
          document.querySelector('.bod-info h5').innerText = "Golden Form"
          // document.querySelector('.bod-info p').innerText = "Super Saiyan 1"
          break;
        default: 
          break;
      }
  }
      var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    onCycleTo: function() {
      changeDescription()
    }
  });
  var instance = M.Carousel.getInstance(elems[0]);
  const nextcarousel = document.querySelector('.next');
  const prevcarousel = document.querySelector('.prev');
  
  
  
  
  
  
  nextcarousel.addEventListener('click', () => {
    instance.next();
  })
  prevcarousel.addEventListener('click', () => {
    instance.prev()
  })
  