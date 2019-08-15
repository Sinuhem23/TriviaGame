// vars

// multiple choice answers
// 





// // variables references to HTML
// var directionsText = document.getElementById("directions-text");





// Set the timer we're counting down to
var countDown = new Date("60000").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDown - now;

  // Time calculations for days, hours, minutes and seconds
  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result 
  document.getElementById("displayTimer").innerHTML = seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displayTimer").innerHTML = "All Done";

   
        
  }

}, 1000);

//  // Hide the directions
//  directionsText.textContent = "";