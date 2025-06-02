export function inicializarCalendario(contenedorId, eventosUrl) {
    const calendarEl = document.getElementById(contenedorId);

    if (!calendarEl) {
        console.error(`No se encontró el contenedor con id "${contenedorId}"`);
        return;
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridDay', // Vista inicial del calendario
        events: eventosUrl, // URL para cargar los eventos desde el backend
        eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false }, // Formato de hora
        slotLabelFormat: { hour: '2-digit', minute: '2-digit', hour12: false }, // Mostrar las horas en la columna izquierda
        slotMinTime: '07:00:00', // Hora mínima que se muestra en el calendario
        slotMaxTime: '22:30:00', // Hora máxima que se muestra en el calendario
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        locale: 'es', // Idioma del calendario
    });

    calendar.render();
}