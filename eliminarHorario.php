<?php

include 'db.php'; 
header('Content-Type: application/json');

$id = $_POST['id']; // Obtener el ID del horario a eliminar

if (isset($id)) {
    //Consulta para eliminar el horario
    $sql = "DELETE FROM horarios WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => 'Horario eliminado correctamente']);
    } else {
        echo json_encode(['error' => 'Error al eliminar el horario: ' . $conn->error]);
    }
}
?>