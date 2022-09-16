var container = document.querySelector(".container");
var hoursInTheDay = [1,2.3];

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

let timeBlockHTML =
`
<div class="input-group mb-3"><span class="input-group-text" id="hours">01pm</span>
<textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
<button class="col-md-1 saveBtn" aria-label="save button 9AM"><i class='fa fa-save'></i></button>
</div>
`;

function createSchedule() {

   for(var i = 0; i < hoursInTheDay.length; i++) {
    
       container.innerHTML = timeBlockHTML;
   
  }
}

createSchedule();


// function updateDivs() {

//   for(var i = 0; i < hoursInTheDay; i++) {

//     let timeBlockHTML =
//         `
//     <div class="input-group mb-3"><span class="input-group-text" id="hours">01pm</span>
//     <textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
//     <button class="col-md-1 saveBtn" aria-label="save button 9AM"><i class='fa fa-save'></i></button>
//   </div>
//     `;
   
//    container.innerHTML = timeBlockHTML;
//  } };

// updateDivs();

// Pseudocode

//Create divs using function and for loop. 

//Use the replace HTML to add the other tags within the div.

//Create an id for the hour of the day.

//Run a for loop to replace the text in each with the hours of the day - use moment?

//Create a formula to attach to an id with an if statement that detects with blocks should change color once their time is past

//Add local storage for the save buttons, including event listener.

//Update CSS as needed to add color and flair

//