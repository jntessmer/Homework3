var upper = ["ABCEDFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var alpha = ["0123456789"];
var special = ["!,#$%^&*()~+=<>|?"];
var charSet = "";

var confUpper = document.getElementById("upperCase");
var confLower = document.getElementById("lowerCase");
var confAlpha = document.getElementById("numbers");
var confSpecials = document.getElementById("specialCharacters");
var password ="";

var charNo = document.getElementById("charBox");

// If statments for check boxes
function generate() {
  // Upper Letters
    if (confUpper.checked == true) {
    charSet += upper;
    console.log(charSet);
  }
  // Lower Letters
  if (confLower.checked == true) {
    charSet += lower;
    console.log(charSet);
  }
  // Numbers
  if (confSpecials.checked == true) {
    charSet += special;
    console.log(charSet);
  } 
  // Special Characters
  if (confAlpha.checked == true) {
    charSet += alpha;
    console.log(charSet);
  }
  // No checked boxes
  if (confLower.checked !== true && confUpper.checked !== true && confAlpha !== true && confSpecials !== true) {
    alert("Please select at least one character type")
  }

// Determining password length
  for (var i = 0; i < charNo.value; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      console.log(password);
    }
  // Display Password
  return document.getElementById("password").innerText = password;
  }


  var copyText = document.getElementById("copy");
  
  copyText.addEventListener("click" , copy);

  function copy(e) {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    e.preventDefault();
  }