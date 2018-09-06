var timeVar = 5;
window.onload = function() {
    $("#start-button").on("click", start);
}

function start() {
    counter();
    intervalId = setInterval(counter, 1000);
}

function counter() {
    if (timeVar > 0) {
        $("#timer-space").text("You have " + timeVar + " seconds left");
        timeVar--;
    }
    else {
        timeUp();
    }
}

function timeUp() {
    clearInterval(intervalId);
    // Submit the form and get your scores
}

function validateForm() {

    console.log($("input[name=Q1]:checked").val());
}