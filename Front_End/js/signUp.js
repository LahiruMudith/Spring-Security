$("#signupButton").on("click", function (e) {
    const fullName = $("#fullName").val();
    const username = $("#username").val();
    const password = $("#password").val();

    fetch("http://localhost:8080/auth/register",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "username":`${username}`,
                "name":`${fullName}`,
                "password":`${password}`,
                "role":`${password}`
            })
        })
        .then(function(res){
            if (res.ok) {
                alert("Registration successful!");
                window.location.href = "signIn.html"; // Redirect to login page
            } else {
                return res.json().then(data => { throw new Error(data.message || 'Registration failed') });
            }
        })
        .catch(function(error) {
            alert("Error: " + error.message);
        });
});