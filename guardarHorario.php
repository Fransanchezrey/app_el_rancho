<?php
include 'db.php'; 
header('Content-Type: application/json');

// Obtener los datos enviados desde el frontend
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !is_array($data)) {
    echo json_encode(['error' => 'Datos no proporcionados']);
    exit;
}

foreach ($data as $horario) {
    $entrenador_id = $horario['entrenador_id'];
    $diaSemana = $horario['diaSemana'];
    $horaInicio = $horario['horaInicio'];
    $horaFin = $horario['horaFin'];

    $stmt = $conn->prepare("INSERT INTO horarios (entrenador_id, dia_semana, hora_inicio, hora_fin) VALUES (?, ?, ?, ?)");
    $stmt->bind_param('isss', $entrenador_id, $diaSemana, $horaInicio, $horaFin);

    if (!$stmt->execute()) {
        echo json_encode(['error' => 'Error al guardar el horario: ' . $conn->error]);
        exit;
    }
}

echo json_encode(['success' => true]);
$conn->close();
?>