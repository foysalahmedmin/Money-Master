function getInputValue(inputID){
    const inputValueString = document.getElementById(inputID).value ;
    const inputValueNum = +inputValueString ;
    console.log(typeof inputValueNum);
    return inputValueNum ;
}
function getElementValue(elementID){
    const textString = document.getElementById(elementID).innerText ;
    const textNum = +textString ;
    return textNum ;
}
function clearInput(inputID){
    document.getElementById(inputID).value = '';
}
function setElementText(elementID, value){
    const element = document.getElementById(elementID) ;
    element.innerText = value ;
}

document.getElementById("calculateBtn").onclick = function(){
    // Main Incomes;
    const incomeValue = getInputValue("incomeInput");
    console.log(incomeValue);
    // Expenses; 
    const foodValue = getInputValue("foodInput");
    const rentValue = getInputValue("rentInput"); 
    const clothsValue = getInputValue("clothsInput");
    // Total Expenses;
    const totalExpenses = foodValue + rentValue + clothsValue  ;
    setElementText("Expenses-Total", totalExpenses);
    // Current Balance;
    const currentBalance = incomeValue - totalExpenses ;
    setElementText("Balance-Total", currentBalance);

    clearInput("foodInput");
    clearInput("rentInput");
    clearInput("clothsInput");
}

document.getElementById("savingBtn").onclick = function() {
    const currentBalance = getElementValue("Balance-Total");
    const savePercent =  getInputValue("saveInput");
    const saveAmount = currentBalance * (savePercent / 100);
    const remainingBalance = currentBalance - saveAmount ;
    if(remainingBalance < 0){
        alert("You have no enough balance to save! :'(");
        return false ;
    }
    clearInput("saveInput")
    setElementText("Saving-Amount", saveAmount);
    setElementText("Remaining-Balance", remainingBalance);
}