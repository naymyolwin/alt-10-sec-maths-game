$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#answerInput").val("");
    $(".startMode").hide(400);
    $(".answerInput").focus();
    startGame();
  });

  $("#answerInput").on("keypress", function (e) {
    if (e.which == 13) {
      console.log("ENTER");
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
  let numbers = generateQA();
  let question = numbers[0] + " + " + numbers[1] + " = ";
  $("#question").text(question);
}

function generateQA() {
  let num1 = 0;
  let num2 = 0;

  num1 = Math.floor(Math.random() * 9);
  num2 = Math.floor(Math.random() * 9);

  console.log([num1, num2]);
  return [num1, num2];
}
