import { cargarEntrenadores } from './entrenadores.js';
import { inicializarFormulario } from './formulario.js';
import { inicializarNavegacion } from './navegacion.js';
import { desplegableEntrenadores } from './desplegableEntrenadores.js';
import { guardarHorarios } from './horarios.js';
import { rellenarHoras } from './rellenarHoras.js';
import { agregarHorarioALista } from './horarios.js';
import { cargarHorariosGuardados } from './horarios.js';
import { inicializarBusqueda } from './busqueda.js';
import { inicializarCalendario } from './calendario.js';

document.addEventListener('DOMContentLoaded', () => {

    cargarEntrenadores();
    rellenarHoras();
    inicializarFormulario();
    inicializarNavegacion();
    desplegableEntrenadores(); 

    // Agregar evento al botón "Agregar Horario"
    const agregarHorarioBtn = document.getElementById('agregarHorario');
    if (agregarHorarioBtn) {
        agregarHorarioBtn.addEventListener('click', agregarHorarioALista);
    }

    // Agregar evento al botón "Guardar Horarios"
    const guardarHorariosBtn = document.getElementById('guardarHorario');
    if (guardarHorariosBtn) {
        guardarHorariosBtn.addEventListener('click', guardarHorarios);
    }

    
    const cargarHorariosGuardadosBtn = document.getElementById('cargarHorariosGuardados');
    if (cargarHorariosGuardadosBtn) {
        cargarHorariosGuardadosBtn.addEventListener('click', cargarHorariosGuardados);
    }

    inicializarBusqueda("busqueda", "listaHorariosGuardados");

    inicializarCalendario('calendario', 'obtenerCalendario.php');
    
});