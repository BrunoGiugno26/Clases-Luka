//*FETCH: Javascript nos ofrece el metodo fetch para hacer peticiones https a algun servicio externo (API),como estas peticiones son asincronicas nosotros vamos a usar el metodo fetch para trabajar con promesas.

// El metodo fetch recibe un primer parametro que es la url a la cual al hacer la peticion, y un segundo parametro opcional de configuracion que es un objeto

//fetch("https://jsonplaceholder.typicode.com/users") //Promise {<Pendings>}
//.then((response) => response.json()) // Promise {<pending>}
//.then((data) => {
//    console.log(data[2]["name"])
//    console.log(data[2]["email"])
//    console.log(data[2]["id"])
//});

fetch("https://jsonplaceholder.typicode.com/users")
.then ((response) => response.json())
.then ((data) => {
    data.forEach((user) => {
        const h2 = document.createElement("h2")
        const h4 = document.createElement("h4")
        const hr = document.createElement("hr")

        //h2.textContent = user.name
        //h4.textContent = user.email
        //hr.textContent = user.name.email

        document.body.appendChild (h2)
        document.body.appendChild (h4)
        document.body.appendChild (hr)
    })
})

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mi primer post',
    body: 'haciendo un post desde una solicitud http',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
        const html =`
        <div class= "product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}"/>
        <p>${product.stock}</p>
        </div>
        </hr>
        `

        document.body.innerHTML += html
    })
})
