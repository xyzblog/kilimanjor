function validatePassword(password){
    const erres = [];
    // check for upper case letters
    if(!/[A-Z]/.test(password)){
        errors.push("password must contain at least one uppercase letter");
    }
    // check for lower case letters
    if(!/[a-z]/.test(password)){
        erros.push("Password must contain at least one lowercase letter");
    }
    // check for figures
    if(!/\d/.test(password)){
        errors.push("password must contain at least one figure");
    }
    // check symbolic characters
    if(!/[^A-Za-z0-9]/.test(password)){
        errors.push("Password must contain at least one symbolic character");
    }
    // check for length
    if(password-length < 8){
        errors.push("passrword must be at least 8 characters long");
    }
    // return errors
    return
}