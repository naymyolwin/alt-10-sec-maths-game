let num1 = 0;
let num2 = 0;
let highScore = 0;
let timeleft = 100;

$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#answerInput").val("");
    $(".startMode").hide(400);
    $(".answerInput").focus();
    countDownTimer();
    startGame();
  });

  $("#answerInput").on("keypress", function (e) {
    if (e.which == 13) {
      calculate($("#answerInput").val());
      $("#answerInput").val("");
    }
  });

  $("#answerInput").on("input", function () {
    let input = this.value.split("");
    if (input.length > 0) {
      if (!/^\d+$/.test(input[input.length - 1])) {
        input.pop();
      }
      $("#answerInput").val(input.join(""));
    }
  });

  // END OF DOCUMENT READY
});

function startGame() {
  generateQA();
  let question = num1 + " + " + num2 + " = ";
  $("#question").text(question);
}

function generateQA() {
  num1 = Math.floor(Math.random() * 9);
  num2 = Math.floor(Math.random() * 9);
}

function calculate(ans) {
  console.log(num1, num2, parseInt(ans));
  if (num1 + num2 === parseInt(ans)) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
  startGame();
}

function countDownTimer() {
  let myTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(myTimer);
    }
    console.log(timeleft);
    $("#countdownbar").width((timeleft / 100) * 100 + "%");
    timeleft -= 1;
  }, 100);
}
