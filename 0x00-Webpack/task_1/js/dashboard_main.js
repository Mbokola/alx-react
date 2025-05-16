const $ = require("jquery");
const _ = require("lodash");

$("body").append($("<p></p>").text("ALX Dashboard"));
$("body").append($("<p></p>").text("Dashboard data for the students"));
const button = $("body").append($("<button></button>").text("Click here to get started"));
$("body").append($("<p id='count'></p>"));
$("body").append($("<p></p>").text("Copyright - ALX"));

let counter = 0
const updateCounter = () => {
    counter += 1;
    $("#count").text(`${counter} clicks on the button`);
}

const debouncedUpdate = _.debounce(updateCounter, 300);
button.on("click", debouncedUpdate);