// validation of form
document
        .getElementById("myForm").addEventListener('submit', function (e){
            // prevent form submission
            e.preventDefault();
            // retrieve form value
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            // clear previous error messages
            document.getElementById('usernameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            // initialize a validation flag
            let isValid = true;
            // validate username
            if(!username){
                document.getElementById('usernameError').textContent = 'Username';
                isValid = false;
            }else if (username.length < 3) {
                document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
                isValid = false;
            }
            // validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            // Basic email regax
            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            }else if (!emailPattern.test(email)){
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            // valide password
            if (!password){
                document.getElementById('passwordError').textContent = "password is requird.";
                isValid  = false;
            }else if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
                isValid = false
            }
            // if all fields are valid, submit the form
            if (isValid) {
                alert('Form submitted successfully!');
                // Add code to submit the form programmatically or reload the page
                // this.submit(); 
                // uncomment to enable for submission
            }
        })