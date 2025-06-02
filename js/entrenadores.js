import { desplegableEntrenadores } from './desplegableEntrenadores.js';

export async function cargarEntrenadores() {
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
        desplegableEntrenadores(); // Actualizar el desplegable de entrenadores
    } else {
        alert(result.error);
    }
}