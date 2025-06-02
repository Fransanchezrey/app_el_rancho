
/*export async function agregarHorario() {
    // Obtener los valores seleccionados
    const entrenadorId = document.querySelector('.desplegableEntrenadores').value;
    const diaSemana = document.getElementById('diaSemana').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFin = document.getElementById('horaFin').value;

    // Validar que todos los campos estén completos
    if (!entrenadorId || !diaSemana || !horaInicio || !horaFin) {
        alert('Por favor, completa todos los campos antes de agregar un horario.');
        return;
    }

    // Enviar los datos al backend
    const response = await fetch('guardarHorario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            entrenador_id: entrenadorId,
            diaSemana: diaSemana,
            horaInicio: horaInicio,
            horaFin: horaFin,
        }),
    });

    const result = await response.json();
    if (result.success) {
        alert(result.success);
        agregarHorarioALista(entrenadorId, diaSemana, horaInicio, horaFin); // Actualizar la lista en el frontend
    } else {
        alert(result.error);
    }
}
    */

export async function agregarHorarioALista() {
    const listaHorarios = document.getElementById('listaHorarios');

    // Obtener los valores seleccionados directamente desde el DOM
    const diaSemana = document.getElementById('diaSemana').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFin = document.getElementById('horaFin').value;
    const entrenadorSelect = document.querySelector('.desplegableEntrenadores');
    const entrenadorNombre = entrenadorSelect.options[entrenadorSelect.selectedIndex].text;
    const entrenadorId = entrenadorSelect.value;

    // Validar que todos los campos estén completos
    if (!diaSemana || !horaInicio || !horaFin || entrenadorSelect.selectedIndex === 0) {
        alert('Por favor, completa todos los campos antes de agregar un horario.');
        return;
    }

    // Crear un nuevo elemento de lista con los datos del horario
    const li = document.createElement('li');
    li.textContent = `Entrenador: ${entrenadorNombre}, Día: ${diaSemana}, De: ${horaInicio} a ${horaFin}`;
    li.dataset.entrenadorId = entrenadorId; // Guardar el ID del entrenador en el elemento
    li.dataset.diaSemana = diaSemana;
    li.dataset.horaInicio = horaInicio;
    li.dataset.horaFin = horaFin;

    listaHorarios.appendChild(li);
}

export async function guardarHorarios() {
    const listaHorarios = document.getElementById('listaHorarios');
    const horarios = [];

    // Recorrer todos los elementos de la lista y recopilar los datos
    listaHorarios.querySelectorAll('li').forEach(li => {
        horarios.push({
            entrenador_id: li.dataset.entrenadorId,
            diaSemana: li.dataset.diaSemana,
            horaInicio: li.dataset.horaInicio,
            horaFin: li.dataset.horaFin,
        });
    });

    // Validar que haya horarios para guardar
    if (horarios.length === 0) {
        alert('No hay horarios para guardar.');
        return;
    }

    // Enviar los horarios al backend como JSON
    const response = await fetch('guardarHorario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(horarios), // Convertir el array de horarios a JSON
    });

    const result = await response.json();
    if (result.success) {
        alert('Horarios guardados correctamente.');
        listaHorarios.innerHTML = ''; // Limpiar la lista después de guardar
    } else {
        alert('Error al guardar los horarios: ' + result.error);
    }
}


export async function cargarHorariosGuardados() {
    const listaHorariosGuardados = document.getElementById('listaHorariosGuardados');
    listaHorariosGuardados.innerHTML = ''; // Limpiar la lista antes de llenarla

    // Obtener los horarios guardados desde el backend
    const response = await fetch('obtenerHorarios.php');
    const horarios = await response.json();

    horarios.forEach(horario => {
        const li = document.createElement('li');
        li.textContent = `Entrenador: ${horario.entrenadorNombre}, Día: ${horario.diaSemana}, De: ${horario.horaInicio} a ${horario.horaFin}`;
        li.dataset.id = horario.id; // Guardar el ID del horario en el elemento

        // Opcional: Agregar botones para editar o eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '10px';
        btnEliminar.addEventListener('click', () => eliminarHorario(horario.id));

        //Botón agregar al calendario
        const btnAgregarFecha = document.createElement('button');
        btnAgregarFecha.textContent = 'Añadir Fecha';
        btnAgregarFecha.style.marginLeft = '10px';

        btnAgregarFecha.addEventListener('click', () => {
            const fecha = prompt('Introduce la fecha (YYYY-MM-DD):');
            if (!fecha) return;

            agregarHorarioAlCalendario(horario.id, fecha);
        });

        li.appendChild(btnEliminar);
        li.appendChild(btnAgregarFecha);
        listaHorariosGuardados.appendChild(li);
    });
}

async function eliminarHorario(id) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este horario?');
    if (!confirmacion) return;

    const response = await fetch('eliminarHorario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ id }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Horario eliminado correctamente.');
        cargarHorariosGuardados(); // Actualizar la lista después de eliminar
    } else {
        alert('Error al eliminar el horario: ' + result.error);
    }
}

export async function agregarHorarioAlCalendario(horarioId, fecha) {
    const response = await fetch('agregarCalendario.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            horario_id: horarioId,
            fecha: fecha,
        }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Fecha añadida correctamente al horario.');
    } else {
        alert('Error al añadir la fecha: ' + result.error);
    }
}