(function () {
  "use strict";

  //Creating Variables for Stop Button & Stop Light
  var stopButton = document.body.querySelector("#stopButton");
  var stopLight = document.body.querySelector("#stopLight");

  //1. Stop Button eventListener: Change Color on Click
  stopButton.addEventListener("click", function () {
    if (stopLight.classList.contains("stop")) {
      stopLight.classList.remove("stop");
    } else {
      stopLight.classList.add("stop");
    }
  });

  //2. Stop Button eventListener: mouseEnter and mouseLeave on button
  stopButton.addEventListener("mouseenter", function () {
    console.log("Entered stop button!");
  });

  stopButton.addEventListener("mouseleave", function () {
    console.log("Left stop button!");
  });

  //Creating Variables for Slow Button & Slow Light
  var slowButton = document.body.querySelector("#slowButton");
  var slowLight = document.body.querySelector("#slowLight");

  //1. Slow Button eventListener: Change Color on Click
  slowButton.addEventListener("click", function () {
    if (slowLight.classList.contains("slow")) {
      slowLight.classList.remove("slow");
    } else {
      slowLight.classList.add("slow");
    }
  });

  //2. Stop Button eventListener: mouseEnter and mouseLeave on button
  slowButton.addEventListener("mouseenter", function () {
    console.log("Entered slow button!");
  });

  slowButton.addEventListener("mouseleave", function () {
    console.log("Left slow button!");
  });

  //Creating Variables for Go Button & Go Light
  var goButton = document.body.querySelector("#goButton");
  var goLight = document.body.querySelector("#goLight");

  //1. Go Button eventListener: Change Color on Click
  goButton.addEventListener("click", function () {
    if (goLight.classList.contains("go")) {
      goLight.classList.remove("go");
    } else {
      goLight.classList.add("go");
    }
  });
  //2. Stop Button eventListener: mouseEnter and mouseLeave on button
  goButton.addEventListener("mouseenter", function () {
    console.log("Entered go button!");
  });

  goButton.addEventListener("mouseleave", function () {
    console.log("Left go button!");
  });

  //BONUS!
  //Add **one** DOM event listener and **one** handler to log the state of each bulb.
  //When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
  //When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.
  window.addEventListener("click", function () {
    if (event.target.id === "stopButton") {
      if (stopLight.classList.contains("stop")) {
        console.log("Stop light bulb is on.");
      } else {
        console.log("Stop light bulb is off.");
      }
    }
    if (event.target.id === "slowButton") {
      if (slowLight.classList.contains("slow")) {
        console.log("Slow light bulb is on.");
      } else {
        console.log("Slow light bulb is off.");
      }
    }
    if (event.target.id === "goButton") {
      if (goLight.classList.contains("go")) {
        console.log("Go light bulb is on.");
      } else {
        console.log("Go light bulb is off.");
      }
    }
  });
})();
