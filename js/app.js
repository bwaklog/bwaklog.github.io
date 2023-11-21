// Get the text content of the paragraph
var paragraph = document.getElementById('shufflee'); // Replace 'yourParagraphId' with the actual ID

// Function to shuffle and update text
function shuffleText() {
    // Convert the text into an array of characters
    var characters = paragraph.textContent.split(' ');

    // Fisher-Yates shuffle for efficient randomization
    characters.sort(function() {
        return 0.5 - Math.random();
    });

    // Set the shuffled text back to the paragraph
    paragraph.textContent = characters.join(' ');
}

// Update the text every 1000 milliseconds (1 second)
setInterval(shuffleText, 50);