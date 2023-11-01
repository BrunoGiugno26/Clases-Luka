// Nuestra primer funcion
//palabra reservada function => nombreFunction =>() => {}
//function saludar(){
//    const nombre = prompt("Ingrese su nombre")
//    const año = prompt("Ingrese su año de nacimiento")
//    alert (`su edad es de ${2023-año}`)
//}

//saludar()
//alert("function ejecutada ok -1 ")
//saludar()
//alert("function ejecutada ok -2 ")
//saludar()

// PARAMETROS - Los parametros nos permiten que una funcion se comporte de diferente manera segun estas "Variables" que nos van a llegar desde fuera de la funcion.

function saludar(nombre){
    console.log("Hola " + nombre)
}

// ARGUMENTOS - Es el valor que se le pasa al parametro recibidoen una funcion.
saludar("Bruno" ) // <= La estamos ejecutando
saludar("ernesto" ) // <= La estamos ejecutando
saludar("gustavo" ) // <= La estamos ejecutando

function sumar (numero1,numero2){
    console.log(numero1 + numero2)
}

const numero1 = 44
const numero2 = 88

sumar(numero1,numero2)

// Es muy importante respetar el orden de los parametros.

// return - Las funciones pueden o no retornar un valor. Se entiende por retornar un valor,extraer un valor desde la funcion hacia afuera de la funcion.

function restar (num1,num2){
    return num1 - num2

}

const resultado = restar(75,20)
console.log(resultado)

// Cuando se ejecuta la palabra reservada return en una funcion, se sale de la funcion por lo que el codigo que esta abajo no se ejecuta.

function calculadora(numero1,numero2,operacion){
    if(operacion == "+"){
    return numero1 + numero2
    } else if (operacion == "-"){
    return numero1 - numero2
    } else{
    return  "La operacion no es valida"
    }
}

const resultado2 = calculadora(75,23,"-")
console.log(resultado2)