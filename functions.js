function topFunction() {
    window.scrollTo(0, 0);
  }

function play() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }



/*slide*/
let currentSlide = 0;

function startSlider() {
    let imageCount = document.getElementById("img1");
  
    if (imageCount.length === 0) {
      imageCount = document.getElementById("img1");
      images.style.transform = `translateX(0px)`;
      return;
    }
  
    let images = document.getElementById("ul1");
    images.style.transform = `translateX(-${currentSlide * 450}px)`;
  
    if (currentSlide === imageCount.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  }
  
  setInterval(() => {
    startSlider();
  }, 5000);