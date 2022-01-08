// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); //display button when the page is loaded

    for (let button of buttons) {                                    //using "this" to refer to a specific button, clicking submit refers to it, get method checks content
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");     //if its submit it will display this message
            } else {
                let gameType = this.getAttribute("data-type");     //otherwise we set up the value of game type to the value of the attribute and this will tell us what game type we want to run
                alert(`You clicked ${gameType}`);                  //that happens in case we click on any other buttons on the page except from submit button
            }
        });
    }
});
/**
 * The main game "loop", called when the script is first loaded   (this is doc string and needs to be used right above the functions to describe what it does)
 * and after the user's answer has been processed
 */
function runGame() {
    //creates 2 random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion () {

}
