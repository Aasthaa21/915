// Show Pop-up when Accept button is clicked
function showPopUp() {
    document.getElementById('popup').style.display = 'block';
}

// Close the Pop-up
function closePopUp() {
    document.getElementById('popup').style.display = 'none';
}

// Accept Valentine action
function acceptValentine() {
    alert("Thank you! You're my Valentine! ❤️");
    closePopUp();
}
