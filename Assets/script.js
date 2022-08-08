// Display the current date with specific format
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);
// Save button code for the time and text
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
    })
    //Moment syntax for the time
    function trackingTime() {
        var time = moment().hour();

        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // If/Else statement to determine past, present, or future
            if (timeBlock < time) {
                $(this).removeClass("future")
                $(this).removeClass("present")
                $(this).addClass("past");
            }
            else if (timeBlock === time) {
                $(this).removeClass("past")
                $(this).removeClass("future")
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present")
                $(this).removeClass("past")
                $(this).addClass("future");
            }
        
        })
    }
    //Calling the function
    trackingTime();
})

// Retrieve the data from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
