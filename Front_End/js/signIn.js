$("#signInButton").on("click", function() {
    const username = $("#loginUsername").val();
    const password = $("#loginPassword").val();

    // console.log(`Username: ${username}`);

    fetch("http://localhost:8080/auth/login",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "username":`${username}`,
                "password":`${password}`,
            })
        })
        .then(function(res){
            if (res.ok) {
                return res.json()
            }
        })
        .then(function (data){
            document.cookie = `token=${data.data.accessToken}; path=/; max-age=3600;`;
            document.cookie = `username=${data.data.username}; path=/; max-age=3600;`;
            document.cookie = `role=${data.data.role}; path=/; max-age=3600;`;
            window.location.href = "dashboard.html"; // Redirect to home page
        })
        .catch(function(error) {
            alert("Error: " + error.message);
            console.log(`Error: ${error.message}`);
        }
        );
});