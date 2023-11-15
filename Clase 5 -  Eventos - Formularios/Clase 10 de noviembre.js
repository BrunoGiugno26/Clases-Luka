// Eventos con formularios

const form = document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
const name = document.getElementById("name").value
const email = document.getElementById("email").value
const query = document.getElementById("query").value


console.log("El formulario se envio con los siguientes datos!!")
console.log("Nombre ",name)
console.log("Email ",email)
console.log("Consulta ",query)
})
//Propagacion de eventos - Bubbling es cuando se lanza un evento en html arranca una propagacion desde el elemento objetivo hacia arriba en la jerarquia de todos los elementos del html incluyendo a los elementos contenedores o padres.
//stopPropagation - Lo que nos permite el stop propagation es interrumpir el proceso de propagacion evitando que el evento alcanze elementos superiores en la jerarquia. Nos va a servir para controlar cuando y donde un evento tiene efecto y cuando se tiene que detener.

const boton = document.getElementById("boton")
const contenedor = document.getElementById("contenedor")

boton.addEventListener("click",(e) =>{
    alert("Click en el boton")
    e.stopPropagation()
})

contenedor.addEventListener("click",(e) => {
    alert("Click en el contenedor")
    
})

const formRegistro = document.getElementById("form-registro")

formRegistro.addEventListener("submit",(e) =>{
    e.preventDefault()
// Capturamos los datos
    const nombre = document.getElementById("name-registro").value
    const email = document.getElementById("email-registro").value
    const edad = document.getElementById("age-registro").value
    const password = document.getElementById("password-registro").value
    const conPassword = document.getElementById("password-registro-confirmacion").value


//Validaciones

if(nombre === ""){
    alert("El nombre es obligatorio")
    return
}
if(email === ""){
    alert("El Email es obligatorio")
    return
}
if(edad === ""){
    alert("La Edad es obligatoria")
    return
}
if(password === ""){
    alert("La contraseña es obligatoria")
    return
}
if(conPassword === ""){
    alert("La confirmacion de la contraseña es obligatorio")
    return
}

if(isNaN(edad)){
    alert("La edad debe ser un numero")
    return
}

if (password !== conPassword){
    alert("Las contraseñas no coinciden")
    return
}

if(email.indexOf("@") ==-1){
    alert("El email debe tener una @")
}

//Enviamos los datos
console.log ("El formulario se envio con los siguientes datos")
console.log ("Nombre ",nombre)
console.log ("email ",email)
console.log ("edad ",edad)
console.log ("password ",password)
console.log ("password ",conPassword)
})