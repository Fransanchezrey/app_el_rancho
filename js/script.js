document.getElementById('entrenadorForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturar datos del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    // Enviar datos al backend
    const response = await fetch('guardarEntrenador.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ nombre, edad }),
    });

    const result = await response.json();
    if (result.success) {
        alert(result.success);
        // Aquí puedes actualizar la lista de entrenadores
        cargarEntrenadores(); // Llamar a la función para actualizar la lista
    } else {
        alert(result.error);
    }
});


async function cargarEntrenadores() {
    const response = await fetch('obtenerEntrenadores.php');
    const entrenadores = await response.json();

    const lista = document.getElementById('listaEntrenadores');
    lista.innerHTML = ''; // Limpiar la lista

    entrenadores.forEach(entrenador => {
        const li = document.createElement('li');
        li.textContent = `${entrenador.nombre} (Edad: ${entrenador.edad})`;

        // Crear botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '10px';
        btnEliminar.addEventListener('click', () => eliminarEntrenador(entrenador.id));

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}


async function eliminarEntrenador(id) {
    const response = await fetch('eliminarEntrenador.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ id }),
    });

    const result = await response.json();
    if (result.success) {
        alert(result.success);
        cargarEntrenadores(); // Actualizar la lista después de eliminar
    } else {
        alert(result.error);
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarEntrenadores);