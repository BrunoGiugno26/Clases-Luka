// Seguios con DOM, Agregamos elementos al DOM

// 1. Crear un elemento
// 2. Agregarle contenido
// 3. Agregarle atributos
// 4. Agregarlo al Dom

// 1. Crear un elemento
//const h1 = document.createElement("h1")

// 1. Agregarle contenido
//h1.textContent = "Este es el titulo de mi Web"

//3. Agregarle atributos
//h1.setAttribute("class","titulo")

// 4. Agregarlo al DOM
//document.body.appendChild(h1)

// Otro ejemplo:

//const game = document.querySelector("#game")
//const img = document.createElement("img")
//img.setAttribute("src","http://dealgoritmos.com/wp-content/uploads/2023/05/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f-640x360.png")
//    game.appendChild(img)


// Eliminamos un elemento del DOM:

//const parrafo = document.querySelector("p")

//setTimeout(() => {
//    parrafo.remove()
//},5000)
//
//* Eventos

//document.body.addEventListener("mousemove",(e) =>{
//    console.log(e)
//})

// 1. Seleccionar el elemento
//const imagen = document.querySelector("img")
// 2. Agregar el evento
//imagen.addEventListener("click",(e) =>{
//    imagen.setAttribute("src","http://dealgoritmos.com/wp-content/uploads/2023/05/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f-640x360.png")
//    imagen.style.borderRadius = "50%"
//    imagen.style.transition = "all is ease"
//    imagen.style.transform = "rotate(-360deg)"
//})

//* Galeria de imagenes interactiva



/*
https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg
https://autotest.com.ar/wp-content/uploads/2021/06/tesla-model-s-plaid-frente.jpg
https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrf-bGv5HklZ9xfJJJMmqTuBquPIkMWTAo965H8uxgtgYqnB27xQ2aHiAKDICQbK85gaBtC20jfDjrFKPT1Cu5a_Hwy3sa37C6y_ELZxVtJo8JmqTY_EZOvfFgcgHsLbsTq7ocFoIbM--0ZZHNeAx_xX3AnBiG8kmy6uLhyO5mqz2gfngvDM6pTMHhfw/s16000/Peugeot-205-GTI-(1).jpeg
*/

//*Creamos un diccionario para darle un indice a cada imagen

const imagenes = {
    1: "https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg",
    2: "https://autotest.com.ar/wp-content/uploads/2021/06/tesla-model-s-plaid-frente.jpg",
    3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrf-bGv5HklZ9xfJJJMmqTuBquPIkMWTAo965H8uxgtgYqnB27xQ2aHiAKDICQbK85gaBtC20jfDjrFKPT1Cu5a_Hwy3sa37C6y_ELZxVtJo8JmqTY_EZOvfFgcgHsLbsTq7ocFoIbM--0ZZHNeAx_xX3AnBiG8kmy6uLhyO5mqz2gfngvDM6pTMHhfw/s16000/Peugeot-205-GTI-(1).jpeg"
}

//*Creamos la funcion para cambiar la imagen

let imagenActual = 1
let totalImagenes = 3


function cambairImagen(incremento){
imagenActual += incremento
if(imagenActual>totalImagenes){
    imagenActual = 1
}
if(imagenActual<1){
    imagenActual = totalImagenes
}
const imagen = document.querySelector("#imagen")
imagen.setAttribute("src",imagenes(imagenActual))
}

//Capturamos los Botones
const botonAnterior = document.querySelector("#boton-anterior")
const botonSiguiente = document.querySelector("#boton-siguiente")

//Crear un evento para cada boton

botonAnterior.addEventListener("click",() => {
    cambairImagen(-1)
})

botonSiguiente.addEventListener("click",() => {
    cambairImagen(1)
})