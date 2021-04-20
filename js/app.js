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

const contenidoIzquierda =
  "Selecciona entre todos los tutores y lenguajes que ILenguaje te ofrece y conversa sobre los diferentes temas que nuestros tutores tienes para ti en una session 1 a 1 con el tutor que elijas.";
const contenidoDerecha =
  "Desarrolla tus habilidades con el idioma que quieras con un tutor de tu elección y ten un conversación amena sobre tu dudas con el idioma o tema que quieras conversar.";
const contenidoCentro =
  "Sabemos que existen trabajadores en otras partes del mundo que buscan lo mismo, por eso buscamos un modelo de negocio que permita a ambos sectores beneficiarse, a través de la cooperación mutua. por lo tanto, nuestro segmento objetivo esta orientado a todos los profesionales y no profesionales que busquen perfeccionar el idioma que ellos quieran.";

window.addEventListener("load", () => {
  if (screen.width <= 992) {
    centroTitle.textContent = "Aprendizaje personalizado";
    centroContent.textContent = contenidoIzquierda;
    izquierdaTitle.textContent = "Perfil del Estudiante";
    izquierdaContent.textContent = contenidoCentro;
    derechaTitle.textContent = " Mejora rápidamente";
    derechaContent.textContent = contenidoDerecha;
    imgIzquierda.src = "./img/Seccion_Student/exams.png";
    imgCentro.src = "./img/Seccion_Student/professor.png";
  } else {
    centroTitle.textContent = "Perfil del Estudiante";
    centroContent.textContent = contenidoCentro;
    izquierdaTitle.textContent = "Aprendizaje personalizado";
    izquierdaContent.textContent = contenidoIzquierda;
    derechaTitle.textContent = "Mejora rápidamente";
    derechaContent.textContent = contenidoDerecha;
    imgIzquierda.src = "./img/Seccion_Student/professor.png";
    imgCentro.src = "./img/Seccion_Student/exams.png";
  }
});

window.addEventListener("resize", () => {
  if (screen.width <= 992) {
    izquierdaTitle.textContent = "Perfil del Estudiante";
    izquierdaContent.textContent = contenidoCentro;
    imgIzquierda.src = "./img/Seccion_Student/exams.png";
    centroTitle.textContent = "Aprendizaje personalizado";
    centroContent.textContent = contenidoIzquierda;
    imgCentro.src = "./img/Seccion_Student/professor.png";
  } else {
    izquierdaTitle.textContent = "Aprendizaje personalizado";
    izquierdaContent.textContent = contenidoIzquierda;
    imgIzquierda.src = "./img/Seccion_Student/professor.png";
    centroTitle.textContent = "Perfil del Estudiante";
    centroContent.textContent = contenidoCentro;
    imgCentro.src = "./img/Seccion_Student/exams.png";
  }
});
//Fin de Seccion_Student

// *! to open modal suscription when the page loads

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
