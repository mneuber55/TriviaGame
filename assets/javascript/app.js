var timeVar = 60;
var resultsSet = [];
var correctNum = 0;
var wrongNum = 0;
var unanswered = 0;

window.onload = function() {
    $("#start-button").on("click", start);
    event.preventDefault();
    $(".fieldset-box").hide();
    $("h5").hide();
}

function start() {
    counter();
    $(".fieldset-box").show();
    $("h5").show();
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
    validateForm();
}

$("#submit-button").on("click", function(event) {
    // prevent form from submitting
    event.preventDefault();
    validateForm();
})

function validateForm() {
    alert("Time's Up!");
    window.scrollTo(0, 0);
    for (i=1; i<=10; i++) {
    resultsSet.push($("input[name=Q"+i+"]:checked").val());
    }
    for (i=0; i<resultsSet.length; i++) {
        if (resultsSet[i] == "yes") {
            correctNum++;
        }
        else if (resultsSet[i] == "no") {
            wrongNum++;
        }
        else {
            unanswered++;
        }
    }
    var right = $("<p>").text("Number Right: " + correctNum)
    var wrong = $("<p>").text("Number Wrong: " + wrongNum);
    var unanswer = $("<p>").text("Number Unanswered: " + unanswered);
    $("#timer-space").html("");
    $("#timer-space").append(right);
    $("#timer-space").append(wrong);
    $("#timer-space").append(unanswer);
    resultsSet = [];
    correctNum = 0;
    wrongNum = 0;
    unanswered = 0;
}