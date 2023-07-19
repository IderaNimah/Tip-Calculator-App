const billAmountInput = document.querySelector(".bill_input");
const numPeopleInput = document.querySelector(".people_input");
const tipAmount = document.querySelector(".tip_value");
const totalPersonCalculaor = document.querySelector(".total_person_calc");

billAmountInput.value = "0.0";
numPeopleInput.value = "1";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalPersonCalculaor.innerHTML = "$" + (0.0).toFixed(2);

