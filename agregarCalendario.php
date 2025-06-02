<?php
include 'db.php'; // Archivo de conexión a la base de datos
header('Content-Type: application/json');

// Verificar que se hayan enviado los datos necesarios
if (!isset($_POST['horario_id'], $_POST['fecha'])) {
    echo json_encode(['error' => 'Datos no proporcionados']);
    exit;
}

$horario_id = $_POST['horario_id'];
$fecha = $_POST['fecha'];

// Insertar el horario en el calendario
$stmt = $conn->prepare("INSERT INTO calendario (horario_id, fecha) VALUES (?, ?)");
$stmt->bind_param('is', $horario_id, $fecha);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Error al agregar el horario al calendario: ' . $conn->error]);
}

$stmt->close();
$conn->close();
?>