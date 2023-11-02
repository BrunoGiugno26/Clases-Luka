/*  Capturando elementos del DOM:

*document.getElementsById("id") - devuelve un elemento capturado por su id
*
*document.getElementsByClassName("Class") - devuelve un conjunto de elementos capturados por su clase
*
*document.getElementsByTagName('tag') - devuelve un conjunto de elementos capturados por su etiqueta
*
*document.querySelector('selector') - devuelve el primer elemento capturado por el selector css
*
*documetn.querySelectorAll('Selector') - devuelve un conjunto de elementos capturados por el selector css
*/

const subtitulo = document.getElementById("Subtitulo")
    console.log(subtitulo)
const parrafos = document.getElementsByClassName("parrafo")
    console.log(parrafos)
const etiquetasP = document.getElementsByTagName("P")
    console.log(etiquetasP)
    const tituloConSelector = document.querySelector("h1")
    console.log(tituloConSelector)
    const parrafosConSelector = document.querySelectorAll(".parrafo")
    console.log(parrafosConSelector)


/**
 * Modificando los elementos del dom - innerHTML - innerText - textContent
 * 
 * La principal diferencia es que con el innerHTML, vamos a poder modificar cualquier etiqueta del html de lo contrario su utilizamos la misma constante pero con por ejemplo innerText lo va a tomar como modificacion del texto y no de la etiqueta
 */

tituloConSelector.innerHTML = "Titulo modificado con innerHTML" 
console.log(tituloConSelector.innerText)
console.log(tituloConSelector.textContent)

/**
 * Modificando los estilos al dom
 * background-color => backgroundColor
 */
const randomColor = () => {
    return Math.floor(Math.random() *255)
}

const cambiarColor = () =>{
const color = `rgb(${randomColor()},${randomColor()}, ${randomColor()})`
document.body.style.backgroundColor = color
}

const cambiarEstilos = () =>{
    subtitulo.style.backgroundColor = "red"
    subtitulo.style.color = "white"
    subtitulo.style.padding = "10px"
    subtitulo.style.borderRadius = "10px"
    tituloConSelector.style.backgroundColor = "blue"
    tituloConSelector.style.color = "white"
    tituloConSelector.style.padding = "10px"
    tituloConSelector.style.borderRadius = "10px"
    
}

setInterval(cambiarColor,2000)
setTimeout(cambiarEstilos,3000)



const enlace = document.querySelector("a")
const imagen = document.querySelector("img")

console.log(enlace.getAttribute("href"))
console.log(imagen.getAttribute("src"))
setTimeout(() =>{
    imagen.setAttribute("src",
    "https://cdn.cliqueinc.com/posts/300533/who-what-wear-podcast-sadie-sink-300533-1655238430452-image.700x0c.jpg")
enlace.setAttribute("href","http://www.youtube.com")
enlace.getAttribute("href")
imagen.getAttribute("src")
},5000)

const boton = document.querySelector("button")

boton.addEventListener("click",() => {
    document.body.innerText = ""
})


