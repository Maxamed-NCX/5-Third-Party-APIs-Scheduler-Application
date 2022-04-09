
// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("MMM DD YYYY");
var currentHour = moment().format('h:mm:ss a');


var hour = moment().hours();
var userInput;
var hourSpan;

// Currnet day
var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function background () {
   //      test time;   
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);

//      determine past, present and futre;
      if (hour < timeTest) {
          $(this).addClass("future");
      } else if (hour > timeTest) {
          $(this).addClass("past");
      } else {
          $(this).addClass("present");
      }
  });
}

// Hour Columns 

var time9AM = $("#9AM");

var time10AM = $("#10AM");

var time11AM = $("#11AM");

var time12PM = $("#12PM");

var time1PM = $("#13PM");

var time2PM = $("#14PM");

var time3PM = $("#15PM");

var time4PM = $("#16PM");

var time5PM = $("#17PM");
;


// storage text area
function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("9:00 AM"))
  time9AM.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 AM"))
  time10AM.val(init10);
  
  
  var init11 = JSON.parse(localStorage.getItem("11:00 AM"))
  time11AM.val(init11);
  
  
  var init12 = JSON.parse(localStorage.getItem("12:00 PM"))
  time12PM.val(init12);
 ;
  
  var init1 = JSON.parse(localStorage.getItem("01:00 PM"))
  time1PM.val(init1);
 
  var init2 = JSON.parse(localStorage.getItem("02:00 PM"))
  time2PM.val(init2);
 
  
  var init3 = JSON.parse(localStorage.getItem("03:00 PM"))
  time3PM.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("04:00 PM"))
  time4PM.val(init4);

  
  var init5 = JSON.parse(localStorage.getItem("05:00 PM"))
  time5PM.val(init5);
 

} 

// run
$(document).ready(function(){
  initPage()
  background()

  // saving to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // Button for clear the day 
  $("#clearScheduler").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});