let num1 = 0;
let num2 = 0;
let highScore = 0;
let yourScore = 0;
let timeleft = 100;

$(document).ready(function () {
  $("#btn-start").click(function () {
    timeleft = 100;
    yourScore = 0;
    $("#score").text(yourScore);
    $("#answerInput").prop("disabled", false);
    $("#answerInput").val("");
    $(".startMode").hide(400);
    $(".answerInput").focus();
    $("#highScore").text(highScore);
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
  if (num1 + num2 === parseInt(ans)) {
    timeleft += 10;
    yourScore++;
    $("#score").text(yourScore);
  }
  startGame();
}

function countDownTimer() {
  let myTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(myTimer);
      $("#answerInput").prop("disabled", true);
      if (yourScore > highScore) {
        highScore = yourScore;
      }
      $("#gameOverModal").modal("show");
      $("#finalScore").text(yourScore);
    }
    $("#countdownbar").width((timeleft / 100) * 100 + "%");
    timeleft -= 1;
  }, 100);
}

function restartGame() {
  $(".startMode").show();
  $("#countdownbar").width("100%");
}
