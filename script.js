const billAmountInput = document.querySelector(".bill_input");
const numPeopleInput = document.querySelector(".people_input");
const tipAmount = document.querySelector(".tip_value");
const totalPersonCalculaor = document.querySelector(".total_person_calc");


billAmountInput.addEventListener("input", billInputFun);
numPeopleInput.addEventListener("input", peopleInputFun);


billAmountInput.value = "0.0";
numPeopleInput.value = "1";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalPersonCalculaor.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;

function billInputFun(){
    billValue=parseFloat(billAmountInput.value)
    console.log(billValue);
}

function peopleInputFun(){
    peopleValue=parseFloat(numPeopleInput.value)
    console.log(peopleValue);
}


