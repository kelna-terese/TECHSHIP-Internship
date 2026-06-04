document.getElementById("password").addEventListener("keyup", function(){

    let password = this.value;
    let strength = "";
    
    // Regular expression to check for at least one special character
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/]/.test(password);

    if (password.length < 6) {
        strength = "Weak";
    } 
    else if (password.length < 10) {
        strength = "Medium";
    } 
    else {
        // If it's 10+ characters, check for the special character
        if (hasSpecialChar) {
            strength = "Strong";
        } else {
            strength = "Medium (Add a special character)";
        }
    }

    document.getElementById("strength").innerText = "Password Strength: " + strength;
});