function rollDice() {
    const diceType = document.getElementById('diceType').value;
    const diceAmount = document.getElementById('diceAmount').value;

    // Validate input values
    if (diceType === '' || diceAmount === '') {
        alert('Please select a dice type and enter the amount.');
        return;
    }

    // Perform dice roll calculations
    let total = 0;
    let rolls = [];

    for (let i = 0; i < diceAmount; i++) {
        const roll = Math.floor(Math.random() * parseInt(diceType)) + 1;
        rolls.push(roll);
        total += roll;
    }

    // Update the output container with the result
    const outputContainer = document.getElementById('diceOutput');
    outputContainer.innerHTML = `
    <p>Rolling ${diceAmount} ${diceType}(s)...</p>
    <p>Results: ${rolls.join(', ')}</p>
    <p>Total: ${total}</p>
  `;
}
