// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // click listener for saveBtn 
    $(".saveBtn").on("click", function () {
        // Get values in jQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours
        var timeNow = moment().hour();

        // loop for time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // check the time classes for background indication
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Put the items that you got from the local storage
    $("#hour8 .description").val(localStorage.getItem("hour9"));
    $("#hour9 .description").val(localStorage.getItem("hour10"));
    $("#hour10 .description").val(localStorage.getItem("hour11"));
    $("#hour11 .description").val(localStorage.getItem("hour12"));
    $("#hour12 .description").val(localStorage.getItem("hour13"));
    $("#hour13 .description").val(localStorage.getItem("hour14"));
    $("#hour14 .description").val(localStorage.getItem("hour15"));
    $("#hour15 .description").val(localStorage.getItem("hour16"));
    $("#hour16 .description").val(localStorage.getItem("hour17"));
    $("#hour17 .description").val(localStorage.getItem("hour18"));

    timeTracker();
})
