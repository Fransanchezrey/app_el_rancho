<?php
// filepath: c:\Users\franc\Desktop\App El Rancho\eliminarEntrenador.php
include 'db.php'; 

header('Content-Type: application/json');

$id = $_POST['id']; // Obtener el ID del entrenador a eliminar

if (isset($id)) {
    // Consulta para eliminar el entrenador
    $sql = "DELETE FROM entrenadores WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => 'Entrenador eliminado correctamente']);
    } else {
        echo json_encode(['error' => 'Error al eliminar el entrenador: ' . $conn->error]);
    }
} else {
    echo json_encode(['error' => 'ID no proporcionado']);
}

?>