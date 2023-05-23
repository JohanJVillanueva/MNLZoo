

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

function playEle() {
    var audio = document.getElementById("elephant");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playLio() {
    var audio = document.getElementById("lion");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playMon() {
    var audio = document.getElementById("monkey");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playDee() {
    var audio = document.getElementById("deer");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playEag() {
    var audio = document.getElementById("eagle");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playPea() {
    var audio = document.getElementById("peacock");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playMac() {
    var audio = document.getElementById("macaw");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playDov() {
    var audio = document.getElementById("dove");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function playPyt() {
    var audio = document.getElementById("python");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }


function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var province = document.getElementById("province").value;


    
      // Check if the first name and last name contain any numbers.
      if (/\d/.test(firstName) || /\d/.test(lastName) || /\d/.test(province)) {
        alert("Please enter a valid first name and last name.");
        return false;
      }


    // Check if all required fields are filled in
    for (var i = 0; i < document.forms[0].elements.length; i++) {
    if (document.forms[0].elements[i].required && document.forms[0].elements[i].value == "") {
    alert("Please fill in all required fields!");
    return false;
    }
    }
    


// Check if the terms and conditions are agreed to
    if (document.forms[0].elements["location"].checked) {
         price = 150;
         var radioButton = document.getElementById("status1");
         if (radioButton.checked) {
           price=100;
         }
    }
    else{
      price = 300;
        var radioButton = document.getElementById("status1");
        if (radioButton.checked) {
          price=200;
        }
    }



    var radioButton = document.getElementById("status2");
    if (radioButton.checked) {

      price = price - (price*0.20)
    }

    var radioButton = document.getElementById("status3");
    if (radioButton.checked) {

      price = 100;
    }

    var radioButton = document.getElementById("status4");
    if (radioButton.checked) {

      price = price - (price*0.20)
    }

   // Check if the terms and conditions are agreed to
    if (!document.forms[0].elements["terms_and_conditions"].checked) {
    alert("You must agree to the terms and conditions to register!");
    return false;
    }
    
    save(price);



  }

