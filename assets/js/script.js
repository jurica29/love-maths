// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {   //gameType variable declared in the loop down there !!! let gameType 
    let buttons = document.getElementsByTagName("button"); //display button when the page is loaded

    for (let button of buttons) {                                    //using "this" to refer to a specific button, clicking submit refers to it, get method checks content
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                  checkAnswer(); //this function will check answer (it is defined lower in the code)
            } else {
            let gameType = this.getAttribute("data-type");     //otherwise we set up the value of game type to the value of the attribute and this will tell us what game type we want to run
                runGame(gameType);                 //that happens in case we click on any other buttons on the page except from submit button
            }
        });
    }

    runGame("addition");
});
/**
 * The main game "loop", called when the script is first loaded   (this is doc string and needs to be used right above the functions to describe what it does)
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //creates 2 random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  // displaying game or error display and exiting it
  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
}

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementbyId("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Hey! You got it right! :D");
    incrementScore();
} else {
    alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    incrementWrongAnswer();
}

runGame(calculatedAnswer[1]);

}

/**
* Gets the operands (the numbers) and the operator (plus, minus etc)
* directly from the dom, and returns the correct answer.
*/
function calculateCorrectAnswer() {

  let operand1 = parseInt(document.getElementById('operand1').innerText); //parseInt treats it as an integer
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = (document.getElementById("operator").innerText);

  if (operator === "+") {                                          //if its a plus sign it will calculate the correct answer, but if its not it will return error message
      return [operand1 + operand2, "addition"];
  } else {
      alert (`Unimplemented operator ${operator}`);
      throw `Unimplemented operator ${operator}. Aborting!`);
  }
  }

}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

  let oldscore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion () {

}
