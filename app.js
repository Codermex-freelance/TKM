function cambiarURL() {
  // Obtiene la URL actual
    const urlActual = window.location.href;
    console.log(urlActual);
    // Reemplaza la parte de la URL que deseas cambiar
    const nuevaURL = urlActual.replace("ejemplo.com", "nuevodominio.com");
    console.log(nuevaURL);
    // Redirige a la nueva URL
    window.location.href = nuevaURL;
}
