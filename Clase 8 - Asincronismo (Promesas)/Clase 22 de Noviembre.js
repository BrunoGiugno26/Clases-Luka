//new Promise((resolve, reject) =>{
//    setTimeout(() => {
//        resolve ("Hola mundo")
//    },2000)
//})

//const eventoFuturo = () =>{
//    return new Promise((resolve,reject) => {
//        setTimeout (() => {
//            resolve("Hola desde el futuro");
//        },2000);
//    });
//}

//const eventoFuturo = (dato) => {
//    return new Promise ((resolve,reject) =>{
//        if(dato){
//            resolve ("Todo bien")
//        } else{
//            reject ("todo mal")
//        }
//    })
//}

const eventoFuturo = (dato) => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            if(dato){
                resolve ("Todo bien")
            }else{
                reject ("Todo mal")
            }
        },2000)
    })
}

//console.log(eventoFuturo(true))
//console.log(eventoFuturo(false)) //pending (codigo asincrono)

//* Then and Catch

//Then: Captura si la promesa fue resuelta correctamente.Su valor de retorno se captura dentro del then resibiendo por parametros su funciones en valor.

//Catch: Se va a utilizar si la promesa es rechazada, es decir ,su valor se va a capturar dentro del catch, siguiendo la misma logica. Vamos a tener el then, para que cuando se resuelva la promesa ejecutando un codigo, se resuelva bien. y el catch para ejecutar otro codigo que se resolvio mal.

//eventoFuturo(true).then((res) =>{
//    console.log(`El resultado de la promesa es: ${res}`)
//})

//eventoFuturo(false).catch((error) =>{
//    console.log(`El resultado de la promesa es: ${error}`)
//})

//eventoFuturo(true).then((res) =>{
//    console.log(`El resultado de la promesa es: ${res}`)
//}).catch((error) => {
//    console.log(`El resultado de la promesa es: ${error}`)
//})

//*Finally: se va a resolver de igual manera independientemente de si la promesa se resuelve o da error.

eventoFuturo(true).then((res) =>{
    console.log(`El resultado de la promesa es: ${res}`)
}).catch((error) => {
    console.log(`El resultado de la promesa es: ${error}`)
}).finally(() => {
    console.log ("Se termino la promesa")
})

// Practica con promesas:
// El array simula nuestra base de datos
const BD =[
    {id: 1, nombre: "producto 1", precio: 1500},
    {id: 2, nombre: "producto 2", precio: 2500},
    {id: 3, nombre: "producto 3", precio: 3500},
    {id: 4, nombre: "producto 4", precio: 3500},
]

// Iniciamos un array de productos vacios y capturamos el div donde vamos a renderizar los productos
let productos = []
const divProductos = document.getElementById("productos")

// Creamos una funcion que simula una peticion a una base de datos.
const pedirProductos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 1800)
    })
}

//Creamos una funcion que renderiza los productos en el div
const renderizarProductos = (productos) => {
    if(productos.length ===0){
        divProductos.innerHTML = `<h2>Cargando...</h2>`
        return
    }
    divProductos.innerHTML = ""
    productos.forEach(producto => {
        divProductos.innerHTML += `
        <div style="border:1px solid black; padding: 18px; margin: 10px; background-color: "#eee" id="producto-${producto.id}">
        <h2>${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        </div>
        `
    })
}

//Ejecutamos la funcion para renderizar los productos
renderizarProductos(productos)

//Ejecutamos la funcion que simula la peticion a la base de datos
pedirProductos().then((res) => {
    productos = res
    renderizarProductos(productos)
})

//AJAX: