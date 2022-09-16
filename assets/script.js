let inputGroupMB3 = document.querySelectorAll(".input-group");
var container = document.querySelector(".container");
var hoursInTheDay = 8;

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));



function createSchedule() {
  var n = $("<div>").addClass("test").appendTo(container);
  var textArea = "Hello World!";
  var timeBlockDiv;  

  for(var i = 0; i < hoursInTheDay; i++) {
    timeBlockDiv = $("<div>").addClass("input-group mb-3").appendTo(container);
    $('<span>').addClass("input-group-text").text(textArea).appendTo(timeBlockDiv);
  }
}

createSchedule();


function updateDivs() {
    let timeBlockHTML =
        `
    <span class="input-group-text" id="9"> 09am</span>
        <textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
        <button class="col-md-1 saveBtn" aria-label="save button 9AM"><i class='fa fa-save'></i></button>
    `;
   
   inputGroupMB3.innerHTML = timeBlockHTML;
  };

updateDivs();

// Pseudocode

//Create divs using function and for loop. 

//Use the replace HTML to add the other tags within the div.

//Create an id for the hour of the day.

//Run a for loop to replace the text in each with the hours of the day - use moment?

//Create a formula to attach to an id with an if statement that detects with blocks should change color once their time is past

//Add local storage for the save buttons, including event listener.

//Update CSS as needed to add color and flair

//