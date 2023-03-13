let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));
let schedule = [];

// Functions that determines the color of the time box and field depending on whether it is past, present, or future.
function blockColors() {
  let currentHour = moment().hours();

  $(".time-block").each(function () {
    let classHour = parseInt($(this).attr("class").split(" ")[2]);
    console.log(classHour);

    if (classHour > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else if (classHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
  });
}

blockColors();

function squareColors() {
  let currentHour = moment().hours();

  $(".timeSquare").each(function () {
    let idHour = parseInt($(this).attr("id"));

    if (idHour > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else if (idHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
  });
}

squareColors();

// Save the contents of the text area and the hour to local storage, as well as retrieve it.
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".time-block").val();
  let time = parseInt($(this).parent().attr("class").split(" ")[1]);
  localStorage.setItem(time, value);
});

$(".9 .time-block").val(localStorage.getItem("9"));
$(".10 .time-block").val(localStorage.getItem("10"));
$(".11 .time-block").val(localStorage.getItem("11"));
$(".12 .time-block").val(localStorage.getItem("12"));
$(".13 .time-block").val(localStorage.getItem("13"));
$(".14 .time-block").val(localStorage.getItem("14"));
$(".15 .time-block").val(localStorage.getItem("15"));
$(".16 .time-block").val(localStorage.getItem("16"));
$(".17 .time-block").val(localStorage.getItem("17"));

// Pseudocode

//Create divs using function and for loop.

//Use the replace HTML to add the other tags within the div.

//Create an id for the hour of the day.

//Run a for loop to replace the text in each with the hours of the day - use moment?

//Create a formula to attach to an id with an if statement that detects with blocks should change color once their time is past

//Add local storage for the save buttons, including event listener.

//Update CSS as needed to add color and flair
