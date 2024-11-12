<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['passwprd'];

    if (empty($username) || empty($password)) {
        echo "<script>alert('Username dan Password harus diisi!'); window.location.href = 'register.html';</script>";
        exit();
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $file = fopen("users.text", "a");
    fclose($file);

    echo "<script>alert('Registrasi berhasil! silahkan login.'); window.location.href = 'index.html';</script>";
}
?>