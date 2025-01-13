<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (empty($username) || empty($password)) {
        echo "<script>alert('Username dan Password harus diisi!'); window.location.href = 'register.html';</script>";
        exit();
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $file = fopen("users.txt", "a");
    fwrite($file, "$username,$hashed_password\n");
    fclose($file);

    echo "<script>alert('Registrasi berhasil! Silahkan login.'); window.location.href = 'index.html';</script>";
}
?>