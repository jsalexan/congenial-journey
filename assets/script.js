
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

var container = document.getElementById("container");


    for (var i = 0; i <= 8; i++) {
      document.write('<div>' + i.toString() + '</div>');
    }


    <div class="input-group mb-3"><span class="input-group-text" id="01">01pm</span>
    <textarea class="col-md-10 time-block" placeholder="Add your event"></textarea>
    <button class="col-md-1 saveBtn" aria-label="save button 9AM"><i class='fa fa-save'></i></button>
  </div>