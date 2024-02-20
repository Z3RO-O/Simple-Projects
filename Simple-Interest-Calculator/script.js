// Function to update the rate on changing the slider
function updateRate() {
  var rateval = Number(document.getElementById("rate").value);
  document.getElementById("rate_val").innerText = rateval;
}
// Function to check if the value of amount deposited/principal is greater than 0
function checkPositive() {
  var principal = Number(document.getElementById("principal").value);
  if (principal <= 0 || principal == undefined) {
    alert("Enter a positive number");
    principal.focus();
    return false;
  }
  return true;
}
// Function to compute the interest and show it on the screen
function compute() {
  var principal = Number(document.getElementById("principal").value);
  var rate = Number(document.getElementById("rate").value);
  var years = Number(document.getElementById("years").value);
  var year = new Date().getFullYear() + parseInt(years);
  var interest = (principal * years * rate) / 100;
  var amount = principal + interest;
  document.getElementById("result").innerHTML =
    "If you deposit <mark>" +
    principal +
    ",</mark><br>at an interest rate of <mark>" +
    rate +
    "%,</mark><br>You will receive an amount of <mark>" +
    interest +
    ",</mark><br>in the year <mark>" +
    year +
    "</mark><br>";

    var getFloat = document.getElementById("result")
    let btn = document.createElement("button");
    btn.innerHTML = "Reset";
    getFloat.appendChild(btn);

    btn.addEventListener('click', () => {
	   window.location.reload()
    })
}

function compute1() {
  var principal = Number(document.getElementById("principal").value);
  var rate = Number(document.getElementById("rate").value);
  var years = Number(document.getElementById("years").value);
  var year = new Date().getFullYear() + parseInt(years);
  var interest = (principal * Math.pow((1+rate),years)); 
  var amount = principal + interest;
  
  document.getElementById("result").innerHTML =
    "If you deposit <mark>" +
    principal +
    ",</mark><br>at an interest rate of <mark>" +
    rate +
    "%,</mark><br>You will receive an amount of <mark>" +
    interest +
    ",</mark><br>in the year <mark>" +
    year +
    "</mark><br>";

    var getFloat = document.getElementById("result")
    let btn = document.createElement("button");
    btn.innerHTML = "Reset";
    getFloat.appendChild(btn);

    btn.addEventListener('click', () => {
	   window.location.reload()
    })
}
