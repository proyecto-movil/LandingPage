// Js para la seccion de Seccion_Student
const centroTitle = document.getElementById("centroTitle");
const centroContent = document.getElementById("centroContent");
const izquierdaTitle = document.getElementById("izquierdaTitle");
const izquierdaContent = document.getElementById("izquierdaContent");
const derechaTitle = document.getElementById("derechaTitle");
const derechaContent = document.getElementById("derechaContent");
const imgCentro = document.getElementById("imgCentro");
const imgIzquierda = document.getElementById("imgIzquierda");
const descriptionDefault =
    "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.";

window.addEventListener("load", () => {
    if (screen.width <= 992) {
        centroTitle.textContent = "Izquierda";
        centroContent.textContent = descriptionDefault;
        izquierdaTitle.textContent = "Centro";
        izquierdaContent.textContent = descriptionDefault;
        derechaTitle.textContent = "Derecha";
        derechaContent.textContent = descriptionDefault;
        imgIzquierda.src = "./img/Seccion_Student/exams.png";
        imgCentro.src = "./img/Seccion_Student/professor.png";
    } else {
        centroTitle.textContent = "Centro";
        centroContent.textContent = descriptionDefault;
        izquierdaTitle.textContent = "Izquierda";
        izquierdaContent.textContent = descriptionDefault;
        derechaTitle.textContent = "Derecha";
        derechaContent.textContent = descriptionDefault;
        imgIzquierda.src = "./img/Seccion_Student/professor.png";
        imgCentro.src = "./img/Seccion_Student/exams.png";
    }
});

window.addEventListener("resize", () => {
    if (screen.width <= 992) {
        izquierdaTitle.textContent = "Centro";
        imgIzquierda.src = "./img/Seccion_Student/exams.png";
        centroTitle.textContent = "Izquierda";
        imgCentro.src = "./img/Seccion_Student/professor.png";
    } else {
        izquierdaTitle.textContent = "Izquierda";
        imgIzquierda.src = "./img/Seccion_Student/professor.png";
        centroTitle.textContent = "Centro";
        imgCentro.src = "./img/Seccion_Student/exams.png";
    }
});
//Fin de Seccion_Student





// *! to open modal suscription when the page loads

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})


// Navbar

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
        
   