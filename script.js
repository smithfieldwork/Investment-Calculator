const inputText = document.getElementById("amount");
const AERText = document.getElementById("AER");
const timeText = document.getElementById("time");
const submitButton = document.getElementById("calculate");
const monthlyOption = document.getElementById("Monthly");
let amountValue = 0;
let rateValue = 0;

const submitValue = submitButton.addEventListener("click", function () {
  // Get the value from the textbox
  amountValue = Number(inputText.value);
  timeValue = Number(timeText.value);
  if (monthlyOption.checked) rateValue = Number(AERText.value) ** (1 / 12);
  else {
    rateValue = Number(AERText.value);
  }
  const finalValue = amountValue * (1 + rateValue) ** timeValue;
  console.log(finalValue);
});

const setMonthlyInterestRate = monthlyOption.addEventListener(
  "change",
  function () {
    if (this.checked) {
      rateValue = rateValue ** (1 / 12);
    }
  }
);

document.getElementById("Yearly").addEventListener("change", function () {
  if (this.checked) {
    console.log("Yearly selected");
  }
  //Female radio button is checked
});

/*
        var x = document.getElementById("myRadio").value;
        alert("The value of the radio button is: " + x);
      }

      function change() {
        var x = (document.getElementById("myRadio").value = "newRadioBtnValue");
        alert("The value was changed to: " + x);
      }
*/
