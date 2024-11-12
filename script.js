
document.getElementById("lofinForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || pass === "") {
    event.preventDefault();
    alert("Usernname dan Password harus diisi!");
    } else {
    alert("Login berhasil!");
    }
})