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


