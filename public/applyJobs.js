document.getElementById("submitBtn").onclick = function() {
    // Here you can add validation or submission logic if needed
    document.getElementById("dialog").style.display = "block";
};

document.querySelector(".close-btn").onclick = function() {
    document.getElementById("dialog").style.display = "none";
};

// Close the dialog if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("dialog")) {
        document.getElementById("dialog").style.display = "none";
    }
};