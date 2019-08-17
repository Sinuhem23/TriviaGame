// vars

// multiple choice answers
// 





// // variables references to HTML
// var directionsText = document.getElementById("directions-text");




function countdown() {
  var seconds = 60;
  function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);

      }else if ( seconds < 10 ){
        document.getElementById("counter").style.color = 'red';

      }
      
      else {
          alert("Time is UP");
      }
  }
  tick();
  
}

// start the countdown
countdown();

//  // Hide the directions
//  directionsText.textContent = "";