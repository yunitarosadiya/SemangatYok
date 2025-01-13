<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    $users = file("users.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    $loginSuccess = false;

    foreach ($users as $user) {
        list($stored_username, $stored_password) = explode(",", $user);
        if ($username === $stored_username && password_verify($password, $stored_password)) {
            $_SESSION['username'] = $username;
            $loginSuccess = true;
            break;
        }
    }

    if ($loginSuccess) {
        header("Location: dashboard.html");
        exit;
    } else {
        echo "<script>alert('Username atau Password salah!'); window.location.href = 'index.html';</script>";
    }
}
?>
