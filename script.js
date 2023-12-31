const billAmountInput = document.querySelector(".bill_input");
const numPeopleInput = document.querySelector(".people_input");
const tipAmount = document.querySelector(".tip_value");
const totalPersonCalculator = document.querySelector(".total_person_calc");
const tips = document.querySelectorAll(".tip_percentage_btn");
const tipCustom = document.querySelector(".custom_input");
const resetButton = document.querySelector(".reset");
const error = document.querySelector(".error");

billAmountInput.addEventListener("input", billInputFun);
numPeopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipInputFun);
resetButton.addEventListener('click', reset)

billAmountInput.value = "0";
numPeopleInput.value = "1";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalPersonCalculator.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
  billValue = parseFloat(billAmountInput.value);
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(numPeopleInput.value);
  
  if (peopleValue < 1){
    error.style.display = "flex";
    numPeopleInput.style.border = "thick solid red";
  }else{
    error.style.display = "none";
    numPeopleInput.style.border = "none";
    calculateTip();

  }
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value/100);
    tips.forEach(function(val){
        val.classList.remove("active_tip");
    });
    calculateTip();
}

function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active_tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active_tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip(){
if (peopleValue >= 1){
    let tipAmountValue = (billValue * tipValue)/peopleValue;
    let total= (billValue / peopleValue) + tipAmountValue;
    tipAmount.innerHTML = "$"+ tipAmountValue.toFixed(2);
    totalPersonCalculator.innerHTML = "$"+ total.toFixed(2);
}
}
function reset(){
    billAmountInput.value = "0";
    billInputFun()
    numPeopleInput.value = "1";
    peopleInputFun()
    tipCustom.value="";
}