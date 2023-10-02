function calculateTime() {
    // Get the word count from input
    var wordCount = document.getElementById('wordCount').value;

    // Calculate time using the formula
    var time = 5 * (wordCount / 250 / 3);

    // Display the time
    document.getElementById('result').innerText = "Time required: " + time + " minutes";
}
