import { cargarEntrenadores } from './entrenadores.js';

export function inicializarFormulario() {
    const form = document.getElementById('entrenadorForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;

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
            cargarEntrenadores(); // Actualizar la lista
        } else {
            alert(result.error);
        }
    });
}