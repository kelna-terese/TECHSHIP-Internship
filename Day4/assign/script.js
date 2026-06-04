const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("collegeError").innerText = "";
    document.getElementById("courseError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let college = document.getElementById("college").value.trim();
    let course = document.getElementById("course").value.trim();

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerText =
        "Name cannot be empty";
        valid = false;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText =
        "Enter a valid email";
        valid = false;
    }

    let phonePattern = /^\d{10}$/;

    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").innerText =
        "Phone number must contain 10 digits";
        valid = false;
    }

    if(college === ""){
        document.getElementById("collegeError").innerText =
        "College cannot be empty";
        valid = false;
    }

    if(course === ""){
        document.getElementById("courseError").innerText =
        "Course cannot be empty";
        valid = false;
    }

    if(valid){

        document.getElementById("successMessage").innerText =
        "STUDENT REGISTRATION SUCCESSFUL";

        let card = document.getElementById("studentCard");

        card.style.display = "block";

        card.innerHTML = `
            <h3>Student Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>College:</strong> ${college}</p>
            <p><strong>Course:</strong> ${course}</p>
        `;
    }

});