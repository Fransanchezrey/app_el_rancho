export function rellenarHoras() {
    const horaInicioSelect = document.getElementById('horaInicio');
    const horaFinSelect = document.getElementById('horaFin');

    // Limpiar los selects
    horaInicioSelect.innerHTML = '<option value="" selected disabled>-- Hora inicio --</option>';
    horaFinSelect.innerHTML = '<option value="" selected disabled>-- Hora fin --</option>';

    // Generar 7:00 a 21:30 en intervalos de 15 minutos
    const startTime = 7 * 60; 
    const endTime = 21 * 60 + 30; 

    for (let time = startTime; time <= endTime; time += 15) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        // Crear opción para Hora Inicio
        const optionInicio = document.createElement('option');
        optionInicio.value = formattedTime;
        optionInicio.textContent = formattedTime;
        horaInicioSelect.appendChild(optionInicio);

        // Crear opción para Hora Fin
        const optionFin = document.createElement('option');
        optionFin.value = formattedTime;
        optionFin.textContent = formattedTime;
        horaFinSelect.appendChild(optionFin);
    }
}