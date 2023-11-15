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