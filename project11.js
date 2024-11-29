const passrwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const password = passrwordInput.value
    if (validatePassword(password)) {
        alert("Password is invalid!");
    }else{
        alert("Invalid password! Please ensure it contain at least one uper case letter, one lower case letter, one figure, one special character, and is at least 8 characters long");
    }
});