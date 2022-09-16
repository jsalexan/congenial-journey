
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var container = document.querySelector(".container");
var hoursInTheDay = 8;

function createSchedule(container2) {
  var n = $("<div>").addClass("test").appendTo(container);
  var textArea = "Hello World!";
  var timeBlockDiv;  

  for(var i = 0; i < hoursInTheDay; i++) {
    timeBlockDiv = $("<div>").addClass("input-group mb-3").appendTo(container);
    $('<span>').addClass("input-group-text").text(textArea).appendTo(timeBlockDiv);
  }
}

createSchedule();