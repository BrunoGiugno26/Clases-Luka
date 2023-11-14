//setTimeout - Es una funcion que permite realizar acciones asincronicamente. Recibe dos parametros , un callback y un valor numerico en milisegundos.

//console.log("Inicio del Programa")

//setTimeout(() =>{
//    console.log("Mitad del programa")
//},3000)

//console.log("Fin del programa")

const btn = document.querySelector("#boton")
const popup = document.querySelector("#popup-mensaje")

btn.addEventListener("click",()=> {
    popup.classList.add("popup-active")

    setTimeout(() => {
        popup.classList.remove("popup-active")
    },2500)
})
