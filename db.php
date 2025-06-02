<?php
// filepath: c:\Users\franc\Desktop\App El Rancho\db.php

$host = 'localhost'; // Servidor local
$user = 'root';      // Usuario por defecto en XAMPP
$password = '';      // Contraseña vacía por defecto
$dbname = 'el_rancho'; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}
?>