<?php
// filepath: c:\Users\franc\Desktop\App El Rancho\guardarEntrenador.php
include 'db.php'; 

header('Content-Type: application/json');

// Obtener datos enviados desde el frontend
$nombre = $_POST['nombre'];
$edad = $_POST['edad'];

// Insertar datos en la tabla
$sql = "INSERT INTO entrenadores (nombre, edad) VALUES ('$nombre', $edad)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => 'Entrenador guardado correctamente']);
} else {
    echo json_encode(['error' => 'Error al guardar el entrenador: ' . $conn->error]);
}

$conn->close();
?>