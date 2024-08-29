let timer;

function startTimer() {
    // Clear the previous timer if exists
    clearInterval(timer);

    const minutes = parseInt(document.getElementById("minutesInput").value);

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    const endTime = new Date().getTime() + minutes * 60000;

    timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;

        const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = minutesRemaining + "m " + secondsRemaining + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Time's up!";
        }
    }, 1000);
}

// Function to handle key validity checking
function isValidKey(e) {
    var charCode = e.keyCode || e.which;
    if (charCode == 8) {
        console.log(e.code);
        return false;
    }
    return true;
}

// Event listener for keydown events
document.addEventListener("keydown", function(event) {
    var toggleCheckbox = document.getElementById("toggleCheckbox");
    // Check if the checkbox is checked
    if (!toggleCheckbox.checked) {
        return; // If not checked, do nothing
    }

    // If checked, call the isValidKey function
    if (!isValidKey(event)) {
        event.preventDefault();
    }
});

// Event listener for checkbox change
document.getElementById("toggleCheckbox").addEventListener("change", function() {
    console.log("isValidKey function is now:", this.checked ? "enabled" : "disabled");
});
function download(){
    var text = document.getElementById("zentextarea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
function wordCount() {
 var text = document.getElementById("zentextarea").value;
 var count = 0;
 var split = text.split(' ');
 for (var i = 0; i < split.length; i++) {
  if (split[i] != "") {
   count ++;
  }
 }
 document.getElementById("wordcount").innerHTML = count;
}