// Example code for dynamically generating character sheet content
// Replace this code with your actual character sheet logic
window.addEventListener('DOMContentLoaded', function () {
    const characterSheet = document.getElementById('characterSheet');

    // Check if there is character data available
    // If not, display "CREATE A NEW character" message
    if (/* Check if character data is available */) {
        characterSheet.innerHTML = 'CREATE A NEW character';
    } else {
        // Display character sheet content dynamically
        characterSheet.innerHTML = `
      <h2>Character Name</h2>
      <ul>
        <li>Race: </li>
        <li>Class: </li>
        <li>Level: </li>
        <!-- Add more character details as needed -->
      </ul>
    `;
    }
});
