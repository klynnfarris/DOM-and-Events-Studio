//load window event 
 window.addEventListener("load", function(){
    console.log('window loaded');
})



// this whole init function has to be initialized
//idk why look into that

function init () {
  //initialize button etc variables
let takeoffButton = null;
let landButton = null;
let abortButton = null;
let leftButton = null;
let rightButton = null;
let upButton = null;
let downButton = null;
let rocketPicture = null;

  //Take off button
    //initialize variables as html elements
    takeoffButton = document.getElementById("takeoff");

    //event listener that calls function when button is clicked
    takeoffButton.addEventListener("click", takeoffConfirm);
    
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

    }

    //land button 
      //if land button is clicked do these things
     landButton = document.getElementById("landing");
     landButton.addEventListener("click", landingConfirm);

    function landingConfirm(){
        let confirmLandingVariable = confirm("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }

    //abortmission button
    //make js variable to store html button
    abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", abortMissionConfirm);

    function abortMissionConfirm(){
      let confirmAbortVariable = confirm("Confirm that you want to abort the mission.");
      document.getElementById("flightStatus").innerHTML = "Misson aborted.";
      document.getElementById("shuttleBackground").style.background = "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }

    //up down left right movement
    // assign html elements to js variables so we can do things w them
    leftButton = document.getElementById("leftb");
    rightButton = document.getElementById("rightb");
    upButton = document.getElementById("upb");
    downButton = document.getElementById("downb");
    rocketPicture = document.getElementById("rocket");

    //on click event listeners
    leftButton.addEventListener("click", moveLeft);
    rightButton.addEventListener("click", moveRight);
    downButton.addEventListener("click", moveDown);
    upButton.addEventListener("click", moveUp);


    rocketPicture.style.position = "relative";
    rocketPicture.style.left = '0px';
    rocketPicture.style.top = '0px';

    // function moveLeft(){
    //   rocketPicture.style.left = parseInt(rocketPicture.style.left ) - 10 + 'px';
    //   }
    function moveRight(){
      rocketPicture.style.left = parseInt(rocketPicture.style.left ) + 10 + 'px';
    }
    
    let shuttleHeight = 0;
    function moveDown(){
      rocketPicture.style.top = parseInt(rocketPicture.style.top) + 10 + 'px';
      function decrement(){
        shuttleHeight += -10000;
      document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
      }
      decrement();
    }

    function moveUp(){
      rocketPicture.style.top = parseInt(rocketPicture.style.top) - 10 + 'px';
      function increment(){
        shuttleHeight += 10000;
      document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
      }
      increment();
    }


    
    
}

window.onload = init;
