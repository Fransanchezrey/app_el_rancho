export function inicializarBusqueda(inputId, listaId) {
    const inputBuscar = document.getElementById(inputId);
    const lista = document.getElementById(listaId);

    inputBuscar.addEventListener("input", () => {
        const texto = inputBuscar.value.toLowerCase();

        // Filtrar los elementos de la lista
        const items = lista.querySelectorAll("li");
        items.forEach(item => {
            const textoItem = item.textContent.toLowerCase();
            if (textoItem.includes(texto)) {
                item.style.display = ""; // Mostrar el elemento
            } else {
                item.style.display = "none"; // Ocultar el elemento
            }
        });
    });
}