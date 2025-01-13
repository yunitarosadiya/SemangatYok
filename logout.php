<?php
session_start();
session_unset(); // Hapus semua data sesi
session_destroy(); // Hancurkan sesi
header("Location: index.html"); // Arahkan kembali ke halaman login
exit;
?>
