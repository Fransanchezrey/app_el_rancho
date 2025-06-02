<?php
include 'db.php'; // Archivo de conexión a la base de datos
header('Content-Type: application/json');

// Verificar que se hayan enviado los datos necesarios
if (!isset($_POST['id'], $_POST['entrenador_id'], $_POST['diaSemana'], $_POST['horaInicio'], $_POST['horaFin'])) {
    echo json_encode(['error' => 'Datos no proporcionados']);
    exit;
}

$id = $_POST['id'];
$entrenador_id = $_POST['entrenador_id'];
$diaSemana = $_POST['diaSemana'];
$horaInicio = $_POST['horaInicio'];
$horaFin = $_POST['horaFin'];

// Actualizar el horario en la base de datos
$stmt = $conn->prepare("UPDATE horarios SET entrenador_id = ?, dia_semana = ?, hora_inicio = ?, hora_fin = ? WHERE id = ?");
$stmt->bind_param('isssi', $entrenador_id, $diaSemana, $horaInicio, $horaFin, $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Error al editar el horario: ' . $conn->error]);
}

$stmt->close();
$conn->close();
?>