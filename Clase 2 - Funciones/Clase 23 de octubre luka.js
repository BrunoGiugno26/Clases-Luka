//*Parametro con valores por defecto

function saludar (nombre = "desconocido", saludo = "Hola nuevamente"){
    return `${saludo} ${nombre}`
}

console.log(saludar(undefined,"Hola"))

//function suma (num1,num2 = 0){
//    return (num1+ num2)
//}

//console.log(suma(1,2))

//console.log (suma(10,0))

//* Practica Funciones:

function esMayorDeEdad(edad){
    if(edad >= 18){
        return true
    } else{
        return false
    }
}

console.log(esMayorDeEdad(18))
console.log(esMayorDeEdad(20))
console.log(esMayorDeEdad(10))

if(esMayorDeEdad(90)){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}

function duplicarEdad(persona){
    return {
        ...persona,
        edad:persona.edad *2
    }
}

const persona = {
    nombre:"Eduardo",
    edad:25
}

const personaDuplicada = duplicarEdad(persona)

console.log(personaDuplicada)

//?Hoisting = Elevacion:

//*Es un termino que se utiliza en javascript para describir como js mueve las declaraciones de funciones al principio del codigo de forma que las podes usar antes de haberlas declarado.

ejemploHoisting()

function ejemploHoisting(){
    console.log("Hola Mundo")
}

//* Function expression = Expresion de funcion (funcion anonima)

operacion(1,2)

const operacion = function(a,b){
    console.log(a+b)
}


//* Arrow Functions = funciones flechas:



// Ventajas:

// 1. No hace falta escribir la palabra function.
// 2. Si la function solo tiene una linea de codigo, no hace falta escribir la palabra return
// 3. Si la funcion solo tiene un parametro, no hace falta escribir los parentesis
// 4. Si la function solo tiene una linea de codigo, no hace falta escribir las llaves

//1 
const restar = (num1,num2) => {
    console.log(num1 - num2)
}

restar(2,1)

// 2 y 4

const multiplicar = (num1,num2) => num1*num2

console.log(multiplicar(2,2))

//3

const dividirPorDos = (numero) => numero / 2

console.log(dividirPorDos(10))

/*
Diferencias:

*Las declaraciones de funciones se elevan al inico del archivo (hoisting).
*por lo que podemos ejecutarlas antes de declararlas. El resto de las funciones no.

*Las funciones expresadas tienen una sintaxis distinta a las funciones declaradas.
*Las funciones flecha, tienene una sitaxis mas clara,no tienen hosting, pueden ser de una sola linea con return inplicito
y no cambia el valor de this



*/

