function addition() {
  var ourAnswer = document.getElementById("ans").value;
  if (isNaN(ourAnswer))
    document.getElementById("output").innerHTML =
      "Hey " + ourAnswer + " is not a Number!";
  else {
    if (correctAnswer == ourAnswer)
      document.getElementById("output").innerHTML =
      "Correct! " + num1 + " + " + num2 + " = " + correctAnswer;
      else
      document.getElementById("output").innerHTML =
      "Incorrect! " +
      num1 +
      " + " +
      num2 +
      " = " +
      correctAnswer +
      ", not " +
      ourAnswer;
    }
}
function newSum()
{
  document.getElementById("output").innerHTML = "";
  document.getElementById("ans").value = "";
  // To generate two random numbers
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("numbers").innerHTML = (num1 + " + " + num2);
  correctAnswer = num1 + num2;
}
