<?php
// filepath: c:\Users\franc\Desktop\App El Rancho\db.php

$host = 'localhost'; 
$user = 'root';      
$password = '';      
$dbname = 'el_rancho'; 

// Crear conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}
?>