
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var container = document.querySelector(".container");
var hoursInTheDay = 8;

function createSchedule(container2) {
  var n = $("<div>").addClass("input-group mb-3").appendTo(container);
  var text = "Hello World!";
  var timeBlockDiv;  

  for(var i = 0; i < hoursInTheDay; i++) {
    timeBlockDiv = $("<div>").addClass("block").appendTo(container);
    $('<span>').text(text).appendTo(timeBlockDiv);
  }
}

createSchedule();