var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));


function blockColors() {
  var hour = moment().hours();

  $(".timeSquare").each(function() {
      var currentHour = parseInt($(this).attr("id"));

          if (currentHour > hour) {
          $(this).addClass("future");
      } else if (currentHour === hour) {
          $(this).addClass("present");
          $(this).removeClass("future");
      } else {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
      }
  })
};

blockColors();

$(".saveBtn").on("click", function() {
var value = $(this)
.siblings(".time-block")
.val()
var time = $(this)
.parent()
.attr("id")
localStorage.setItem(time, value);
})

$("#9 .time-block").val(localStorage.getItem("9"));
$("#10 .time-block").val(localStorage.getItem("10"));
$("#11 .time-block").val(localStorage.getItem("11"));
$("#12 .time-block").val(localStorage.getItem("12"));
$("#13 .time-block").val(localStorage.getItem("13"));
$("#14 .time-block").val(localStorage.getItem("14"));
$("#15 .time-block").val(localStorage.getItem("15"));
$("#16 .time-block").val(localStorage.getItem("16"));
$("#17 .time-block").val(localStorage.getItem("17"));










// let timeBlockHtmlString = [""];
// let hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// console.log(hoursArray);

// function createSchedule() {

//    for ( let i = 0; i < 8; i++) {
//     timeBlockHtmlString += `<div class="input-group mb-3"><span class="input-group-text" id="hours"></span>
//     <textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
//      <button class="col-md-1 saveBtn" aria-label="save button"><i class='fa fa-save'></i></button>
//      </div>`; 
//     container.innerHTML = timeBlockHtmlString;
// }
// }
// createSchedule();



// $(".input-group-text").each(function (index) { $(this).siblings(".input-group-text").text(hoursArray[index]); });
  




// Pseudocode

//Create divs using function and for loop. 

//Use the replace HTML to add the other tags within the div.

//Create an id for the hour of the day.

//Run a for loop to replace the text in each with the hours of the day - use moment?

//Create a formula to attach to an id with an if statement that detects with blocks should change color once their time is past

//Add local storage for the save buttons, including event listener.

//Update CSS as needed to add color and flair
