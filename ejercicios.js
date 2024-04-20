//Ejercicio 1
document.addEventListener("DOMContentLoaded", funciones);

function funciones() {
    //Ejercicio 2
    cuentaPalabras();
    //Ejercicio 3
    nulla();
    //Ejercicio 4
    añadirImagen();
    //Ejercicio 5
    cambioColor();
    //Ejercicio 6
    aumentarLetra();
    //Ejercicio 7
    let botones = document.getElementsByClassName("oculta");
    for (let index = 0; index < botones.length; index++) {
        botones[index].addEventListener("click", function (e) {
            ocultar(e.currentTarget);
            e.stopPropagation();
        });
    }
    //Ejercicio 8
    mostrarHora();
}

function cuentaPalabras() {
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let palabras = parrafos[i].textContent.split(/\s/);
        parrafos[i].innerHTML += "<br><strong>Total palabras: " + palabras.length + "</strong>";
    }
}

function nulla() {
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let palabraNulla = parrafos[i].textContent.includes("nulla");
        if (palabraNulla) {
            let link = "<a href='http://google.com'>nulla</a>";
            parrafos[i].innerHTML = parrafos[i].innerHTML.replace("nulla", link);
        }
    }
}

function añadirImagen() {
    let headings = document.getElementsByTagName("h1");
    for (let i = 0; i < headings.length; i++) {
        let img = document.createElement("img");
        img.src = "https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png";
        img.width = "16";
        img.style.marginLeft = "10px";
        headings[i].appendChild(img);
    }
}

function cambioColor() {
    let paragraph = document.getElementById("abstract");
    paragraph.addEventListener("click", function() {
        let currentColor = window.getComputedStyle(paragraph).backgroundColor;
        paragraph.style.backgroundColor = currentColor === "rgb(144, 238, 144)" ? "rgb(74, 157, 206)" : "lightgreen";
    });
}

function aumentarLetra() {
    let tamañoLetra = document.getElementById("content");
    let originalFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    tamañoLetra.addEventListener("click", function() {
        let currentFontSize = parseFloat(window.getComputedStyle(tamañoLetra).fontSize);
        if (currentFontSize < originalFontSize * 2) {
            tamañoLetra.style.fontSize = `${currentFontSize + 1}px`;
        } else {
            tamañoLetra.style.fontSize = `${originalFontSize}px`;
        }
    });
}
function ocultar(ele) {
    let hermano = ele.nextSibling;;
    while (hermano.nodeName != "DIV") {
        hermano = hermano.nextSibling;
    };
    hermano.style.display = (ele.innerHTML == "Mostrar") ? "block" : "none";
    ele.innerHTML = (ele.innerHTML == "Mostrar") ? "Ocultar" : "Mostrar";
}
function mostrarHora(){
    let reloj = document.createElement("div");
    reloj.innerHTML = "00:00:00";
    reloj.id = "reloj";
    reloj.setAttribute("style", "position: absolute; display: none; background-color: red; color: white; border: 1px solid black;");
    document.body.appendChild(reloj);

    let parrafos = document.getElementsByTagName("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].addEventListener("mouseenter", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "block";
            let d = new Date();
            reloj.innerHTML = (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
        });

        parrafos[index].addEventListener("mousemove", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.left = (e.clientX + 5) + "px";
            reloj.style.top = (e.clientY - 5) + "px";
        });

        parrafos[index].addEventListener("mouseleave", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "none";
            console.log(e.target, e.currentTarget);
        });
    }
}
