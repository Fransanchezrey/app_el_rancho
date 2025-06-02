<?php
include 'db.php'; // Archivo de conexión a la base de datos
header('Content-Type: application/json');

// Obtener los horarios desde la base de datos
$result = $conn->query("SELECT h.id, h.dia_semana AS diaSemana, h.hora_inicio AS horaInicio, h.hora_fin AS horaFin, e.nombre AS entrenadorNombre
                        FROM horarios h
                        JOIN entrenadores e ON h.entrenador_id = e.id");

$horarios = [];
while ($row = $result->fetch_assoc()) {
    $horarios[] = $row;
}

echo json_encode($horarios);
$conn->close();
?>