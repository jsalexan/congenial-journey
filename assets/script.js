var container = document.querySelector(".container");
var hours = document.querySelectorAll(".hours");
var textAreaEl = document.getElementById(".col-md-10");
var hours = document.querySelectorAll("#hours");

var k = document.querySelectorAll(".k");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

let timeBlockHtmlString = [""];
let hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
console.log(hoursArray);

function createSchedule() {

   for ( let i = 0; i < 8; i++) {
    timeBlockHtmlString += `<div class="input-group mb-3"><span class="input-group-text" id="hours"></span>
    <textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
     <button class="col-md-1 saveBtn" aria-label="save button"><i class='fa fa-save'></i></button>
     </div>`; 
    container.innerHTML = timeBlockHtmlString;
}
}
createSchedule();



  




// Pseudocode

//Create divs using function and for loop. 

//Use the replace HTML to add the other tags within the div.

//Create an id for the hour of the day.

//Run a for loop to replace the text in each with the hours of the day - use moment?

//Create a formula to attach to an id with an if statement that detects with blocks should change color once their time is past

//Add local storage for the save buttons, including event listener.

//Update CSS as needed to add color and flair
