const claveFila = "teclado";
const filaJSON = localStorage.getItem(claveFila);
const fila = JSON.parse(filaJSON);
const nombreTeclado = fila[0].nombre;
const precioTeclado = fila[0].precio;
const idTeclado = fila[0].id;

const precio = precioTeclado.replace("$", "");
let precioDescuento = (Number(precio) / 3);


const contenidoHTMLimg = `
                        <img class="tecladoImagen" src="build/img/articulo${idTeclado}_sub.webp" alt="${nombreTeclado}">
                        <img class="tecladoImagen" src="build/img/articulo${idTeclado}.webp" alt="${nombreTeclado}">
                        <img class="tecladoImagen" src="build/img/articulo${idTeclado}_sub_${idTeclado}.webp" alt="${nombreTeclado}">
                        `
document.querySelector('#tecladoImg').innerHTML = contenidoHTMLimg;
const contenidoHTML = `
                    <h1 class="teclado__heading">${nombreTeclado}</h1>
                    <p class="teclado__precio">${precioTeclado}</p>
                    <label class="teclado__descuento"><span> 3 </span>  cuotas sin interes de <span>$${precioDescuento.toFixed(2)}</span> </label>
                    `
document.querySelector('#tecladoInformacion').innerHTML = contenidoHTML + document.querySelector('#tecladoInformacion').innerHTML;


const labels = document.querySelectorAll(".switches__switch");

labels.forEach(label => {
  label.style.backgroundColor = "initial"; // Color base inicial

    label.addEventListener("click", () => {
        labels.forEach(label => {
            label.style.backgroundColor = "initial"; // Restablece el color base en los demás
            label.style.color = "initial";
        });
        label.style.backgroundColor = "black"; // Color diferente para el seleccionado
        label.style.color = "white"; // Color diferente para el seleccionado
    });
});