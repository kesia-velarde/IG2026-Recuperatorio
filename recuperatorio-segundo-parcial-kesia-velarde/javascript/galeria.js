const obras = [
    {
        nombre: "Still Life",
        año: "2016",
        imagen: "imagenes/reas-1.jpg"
    },
    {
        nombre: "Process",
        año: "2004-2010",
        imagen: "imagenes/reas-2.jpg"
    },
    {
        nombre: "Process 3 / Structure 3",
        año: "2005",
        imagen: "imagenes/reas-3.jpg"
    },
    {
        nombre: "Microimagen A02",
        año: "2002",
        imagen: "imagenes/reas4.jpg"
    },
    {
        nombre: "Day 1 Die",
        año: "2017",
        imagen: "imagenes/reas5.jpg"
    }
];

const galeria = document.getElementById("galeriaObras");
const boton = document.getElementById("btnCambiar");

function mostrarObras() {
    galeria.innerHTML = "";

    for (let i = 0; i < obras.length; i++) {
        const imagen = document.createElement("img");
        imagen.src = obras[i].imagen;
        imagen.alt = obras[i].nombre;

        const nombre = document.createElement("h3");
        nombre.textContent = obras[i].nombre;

        const año = document.createElement("p");
        año.textContent = obras[i].año;

        galeria.appendChild(imagen);
        galeria.appendChild(nombre);
        galeria.appendChild(año);
    }
}

boton.addEventListener("click", function () {
    galeria.style.fontSize = "1.3rem";
    galeria.style.padding = "2rem";
});

mostrarObras();