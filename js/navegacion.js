export function inicializarNavegacion() {
    const enlaces = document.querySelectorAll('nav a'); 
    const secciones = document.querySelectorAll('section'); 

    // Función para ocultar todas las secciones
    function ocultarSecciones() {
        secciones.forEach(seccion => {
            seccion.style.display = 'none';
        });
    }

    // Agregar evento a cada enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault(); 

            ocultarSecciones(); 

            // Mostrar la sección correspondiente
            const idSeccion = enlace.dataset.seccion; 
            const seccion = document.getElementById(idSeccion);
            if (seccion) {
                seccion.style.display = 'block';
            } else {
                console.error(`No se encontró la sección con id: ${idSeccion}`);
            }
        });
    });

    // Mostrar la primera sección por defecto
    ocultarSecciones();
    const seccionInicial = document.getElementById('gestionEntrenadores');
    if (seccionInicial) {
        seccionInicial.style.display = 'block';
    } else {
        console.error('No se encontró la sección inicial: gestionEntrenadores');
    }
}