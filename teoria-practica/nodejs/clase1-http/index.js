//const os = require("os")

//console.log(os.homedir())

//const fs = require("fs");

//fs.readFile("hola.txt","utf8",(err,data) =>{
//    if (err) throw err
//    console.log(data)
//})

//fs.writeFile("prueba.txt","Hola mundo desde js!!", (err) => {
//    if (err) throw err
//    console.log("Archivo creado")
//})

//fs.unlink("prueba.txt", (err) => {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log("Archivo eliminado")
//    }
//})

//SISTEMA VIEJO DE NODE.JS

//const http = require("http");

//const server = http.createServer((req,res) => {
//res.statusCode = 200
//res.setHeader("Content-type","text/html")
//res.end("<h1>hola mundo desde NodeJS</h1>")
//})

//server.listen(() => {
//console.log("El servidor se esta ejecutando en http://localhost:8080")
//})

const http = require ("http")
const url = require("url")

const router = {
    "/":(req,res) => {
    console.log(req)
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    res.end("<h1>Hola mundo desde Nodejs!!</h1>")
    },

"/about":(req,res) => {
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    res.end("<h1>Acerca de Nosotros</h1>")
    },

    "/contact":(req,res) => {
        res.statusCode = 200
        res.setHeader("Content-type","text/html")
        res.end("<h1>Contactanos</h1>")
    },
}
const server = http.createServer((req,res) => {
const path = url.parse(req.url).pathname

    if (router[path]) {
        router[path](req,res)
    } else {
        res.statusCode = 404
        res.setHeader("Content-type","text/html")
        res.end("<h1>404 Not Found</h1>")
    }
})

server.listen(8080,() => {
console.log("El servidor esta escribiendo en el puerto 8080")
})