<?php
// filepath: c:\Users\franc\Desktop\App El Rancho\obtenerEntrenadores.php
include 'db.php';

header('Content-Type: application/json');

// Consultar la tabla de entrenadores
$sql = "SELECT * FROM entrenadores";
$result = $conn->query($sql);

$entrenadores = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $entrenadores[] = $row;
    }
}

echo json_encode($entrenadores);

$conn->close();
?>