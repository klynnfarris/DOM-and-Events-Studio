//load window event 
 window.addEventListener("load", function(){
    console.log('window loaded');
})


//initialize buttons
let takeoffButton = null;

// this whole function has to be initialized
//idk why look into that

function init () {
    //initialize variables as html elements
    takeoffButton = document.getElementById("takeoff");
    
    //if takeoff button is clicked do these things
    function takeoffConfirm() {
      // pull up confirm window
      let confirmVariable = confirm("Confirm that the shuttle is ready for takeoff.");

      // this code executes if user clicks ok or confirm
      if (confirmVariable == true){
          document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
          document.getElementById("shuttleBackground").style.background = "blue";

          //this function increments the spaceshuttleheight by 10000
          var i = 0;
          function increment(){
            i += 10000;
          document.getElementById("spaceShuttleHeight").innerHTML = i;
          }
          //call the function we created to increase the height
          increment();
      }

      //if land button is clicked do these things


    }

    //add event listeners for buttons
    takeoffButton.addEventListener("click", takeoffConfirm);

      //if land button is clicked do these things
    landButton = document.getElementById("landing");

    function landingConfirm(){
        let confirmLandingVariable = confirm("The shuttle is landing. Landing gear engaged.")
    }
    
    landButton.addEventListener("click", landingConfirm);
}

window.onload = init;
