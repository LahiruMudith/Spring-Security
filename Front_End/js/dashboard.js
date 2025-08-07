window.onload = function() {
    const role = getCookie("role");
    $("#welcomeText").text("Welcome, " + role);
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}