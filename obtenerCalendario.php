<?php
include 'db.php'; 
header('Content-Type: application/json');

// Consulta para obtener los datos del calendario
$result = $conn->query("
    SELECT c.fecha, h.hora_inicio, h.hora_fin, e.nombre AS entrenador_nombre
    FROM calendario c
    JOIN horarios h ON c.horario_id = h.id
    JOIN entrenadores e ON h.entrenador_id = e.id
    ORDER BY c.fecha, h.hora_inicio
");

$eventos = [];
while ($row = $result->fetch_assoc()) {
    $eventos[] = [
        'title' => $row['entrenador_nombre'], 
        'start' => $row['fecha'] . 'T' . $row['hora_inicio'], 
        'end' => $row['fecha'] . 'T' . $row['hora_fin'], 
    ];
}

echo json_encode($eventos);
$conn->close();
?>