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
                    <h1 class="teclado__heading f-w-700">${nombreTeclado}</h1>
                    <p class="teclado__precio f-w-900">${precioTeclado}</p>
                    <label class="teclado__descuento"><span class="f-w-700"> 3 </span>  cuotas sin interes de <span class="f-w-700">$${precioDescuento.toFixed(2)}</span> </label>
                    `
document.querySelector('#tecladoInformacion').innerHTML = contenidoHTML + document.querySelector('#tecladoInformacion').innerHTML;


const labels = document.querySelectorAll(".switches__switch");

labels.forEach(label => {
    label.addEventListener("click", () => {
        labels.forEach(label => {
            label.style.backgroundColor = "initial"; // Restablece el color base en los demás
            label.style.color = "initial";
        });
        label.style.backgroundColor = "black"; // Color diferente para el seleccionado
        label.style.color = "white"; // Color diferente para el seleccionado
    });
});


const buttom_fav = document.querySelectorAll(".favorito");

buttom_fav.forEach(buttom => {
    buttom.addEventListener("click", () => {
        if(buttom.style.backgroundColor === "black"){
            buttom.style.backgroundColor = "white"; // Restablece el color base en los demás
            buttom.style.fill = "black";
        }else{
            buttom.style.backgroundColor = "black"; // Color diferente para el seleccionado
            buttom.style.fill = "white"; // Color diferente para el seleccionado
            buttom.style.borderColor = "black";
        }
    });
});