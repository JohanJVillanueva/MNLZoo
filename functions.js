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
    
    var radioButton = document.getElementById("status1");
    if (radioButton.checked) {
      alert("Student Discount");
      console.log("Hello")
    }

    var radioButton = document.getElementById("status2");
    if (radioButton.checked) {
      alert("PWD Discount");
      console.log("Hello")
    }

    var radioButton = document.getElementById("status3");
    if (radioButton.checked) {
      alert("LGU Discount");
      console.log("Hello")
    }

    var radioButton = document.getElementById("status4");
    if (radioButton.checked) {
      alert("Senior Dicount");
      console.log("Hello")
    }

    // Check if the terms and conditions are agreed to
    if (!document.forms[0].elements["terms_and_conditions"].checked) {
    alert("You must agree to the terms and conditions to register!");
    return false;
    }
    
    return true;


  }