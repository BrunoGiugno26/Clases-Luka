//setTimeout - Es una funcion que permite realizar acciones asincronicamente. Recibe dos parametros , un callback y un valor numerico en milisegundos.

//console.log("Inicio del Programa")

//setTimeout(() =>{
//    console.log("Mitad del programa")
//},3000)

//console.log("Fin del programa")

//const btn = document.querySelector("#boton")
//const popup = document.querySelector("#popup-mensaje")

//btn.addEventListener("click",()=> {
//    popup.classList.add("popup-active")

//    const timeout = setTimeout(() => {
//        popup.classList.remove("popup-active")
//    },2500)

//    clearTimeout(timeout)
//})

// setInterval nos permite ejecutar una funcion repetitiva a travez de un intervalo del tiempo.
//let counter = 1
//const intervalo = setInterval[() =>{
//    console.log("tic tac",counter)
//    counter++
//},1000]

//clearInterval - clearTimeOut: en caso de querer remover un intervalo o parar lo vamos a poder hacer mediante la funcion clearinterval lo que tenemos que hacer es igualar este set interval a una variable
//setTimeout[() =>{
//    clearInterval(intervalo)
//},2000]

let contador = 0

let conteo = setInterval[() =>{
    console.log("Contador",contador)
    contador++
},1000]

const boton = document.createElement("button")
boton.textContent = "Detener contador"
document.body.appendChild(boton)

boton.addEventListener ("click",() =>{
    clearInterval(conteo)
})

const botonPlay = document.createElement("button")
botonPlay.textContent = "Reproducir contador"
document.body.appendChild(botonPlay)

botonPlay.addEventListener("click",() =>{
    conteo = setInterval(() => {
       console.log("Contador",contador)
        contador++
    },1000)
})

const reinicio = document.createElement("button")
reinicio.textContent = "Reiniciar contador"
document.body.appendChild(reinicio)

reinicio.addEventListener("click",() => {
    contador = 0
})

//Promesas: Es un objeto que representa un evento a futuro, es un accion asincronica que se puede completar en algun momento y producir un valor y notificar cuando esto suceda o no

 //Una promesa cuenta con tres estados posibles: Pendding, full filled, reject pueden ser resueltas o rechazadas

clearInterval(conteo)
clearInterval(intervalo)

const eventoFuturo = () => {
    return new Promise ((resolve,reject) =>{
        if(res === true){
            resolve ("El evento se realizo con exito")
        } else{
            reject ("El evento no se pudo realizar")
        }
    })
}

console.log(eventoFuturo(true))
console.log(eventoFuturo(false))