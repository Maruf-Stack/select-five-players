// conmmon function of manager and coach 
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

// player expenses function 
function playerExpenses(expenses) {
    const playerExpenses = document.getElementById(expenses);
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesAmount = parseInt(playerExpensesString);

    return playerExpensesAmount;
}
// calculate button 
document.getElementById('calculate').addEventListener('click', function () {
    // per player budget /total expenses
    const perPlayer = document.getElementById('perplayer-field');
    const perPlayerString = perPlayer.value;
    const perPlayerAmount = parseInt(perPlayerString);
    const PlayersLegnth = getLength('selected-players');
    const totalCostOfPlayers = PlayersLegnth * perPlayerAmount;
    const expenses = playerExpenses('player-expenses');
    const totalExpenses = document.getElementById('player-expenses');
    totalExpenses.innerText = totalCostOfPlayers;
})


// calculate total 
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = getInputValueById('manager');
    const coachCost = getInputValueById('coach');
    const managerAndCoachCost = managerCost + coachCost;
    const previouTotalExpenses = playerExpenses('player-expenses');
    const finalTotal = previouTotalExpenses + managerAndCoachCost;
    const finalTotalElement = document.getElementById('final-total');
    const finalTotalString = finalTotalElement.innerText;
    const finalTotalAmount = parseInt(finalTotalString);
    finalTotalElement.innerText = finalTotal;

})
