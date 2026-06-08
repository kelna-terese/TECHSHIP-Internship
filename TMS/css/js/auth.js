const passwordInput =
document.getElementById("password");

const strengthMessage =
document.getElementById("strengthMessage");

if(passwordInput){

   passwordInput.addEventListener(
    "input",
    function(){
        const password =
        passwordInput.value;

            if(password.length < 6){

                strengthMessage.innerText =
                "Weak Password";

                strengthMessage.style.color =
                "red";
            }

            else if(
                /[A-Z]/.test(password) &&
                /[0-9]/.test(password)
            ){

                strengthMessage.innerText =
                "Strong Password";

                strengthMessage.style.color =
                "#d6ff4d";
            }

            else{

                strengthMessage.innerText =
                "Medium Password";

                strengthMessage.style.color =
                "orange";
            }

        }
    );

}
/* =========================
SIGNUP LOGIC
========================= */

const signupForm =
document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        const fullName =
        document.getElementById("fullName").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const password =
        document.getElementById("password").value;

        const confirmPassword =
        document.getElementById("confirmPassword").value;

        const message =
        document.getElementById("message");

        message.innerText = "";

        if (
            fullName === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            message.innerText =
            "All fields are required.";
            return;
        }

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.innerText =
            "Please enter a valid email.";
            return;
        }

        if (password !== confirmPassword) {
            message.innerText =
            "Passwords do not match.";
            return;
        }

        let users = getUsers();

        const existingUser =
        users.find(
            user => user.email === email
        );

        if (existingUser) {
            message.innerText =
            "Email already registered.";
            return;
        }

        users.push({
            fullName,
            email,
            password
        });

        saveUsers(users);

        showToast(
            "Registration Successful!"
        );

        window.location.href =
        "login.html";

    }
);

}

/* =========================
LOGIN LOGIC
========================= */

const loginForm =
document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        const email =
        document.getElementById("loginEmail").value.trim();

        const password =
        document.getElementById("loginPassword").value;

        const message =
        document.getElementById("message");

        message.innerText = "";

        if (
            email === "" ||
            password === ""
        ) {
            message.innerText =
            "All fields are required.";
            return;
        }

        const users =
        getUsers();

        const foundUser =
        users.find(
            user =>
            user.email === email &&
            user.password === password
        );

        if (!foundUser) {

            message.innerText =
            "Invalid Email or Password";

            return;
        }

        setCurrentUser(
            foundUser
        );

       showToast("Login Successful!");
setTimeout(()=>{window.location.href="dashboard.html";},2000);
    }
);

}
function showToast(message) {

    const toast =
    document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}