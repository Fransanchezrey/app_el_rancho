export async function desplegableEntrenadores() {
    const response = await fetch('obtenerEntrenadores.php');
    const entrenadores = await response.json();

    const select = document.querySelectorAll('.desplegableEntrenadores');

    // Limpiar y rellenar cada desplegable
    select.forEach(select => {
        select.innerHTML = ''; // Limpiar el desplegable

         // Agregar la opción por defecto
         const defaultOption = document.createElement('option');
         defaultOption.value = '';
         defaultOption.textContent = '-- Selecciona un entrenador --';
         defaultOption.disabled = true;
         defaultOption.selected = true;
         select.appendChild(defaultOption);

        entrenadores.forEach(entrenador => {
            const option = document.createElement('option');
            option.value = entrenador.id;
            option.textContent = `${entrenador.nombre}`;
            select.appendChild(option);
        });
    });
}