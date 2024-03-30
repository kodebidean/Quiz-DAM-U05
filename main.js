// Elementos principales de interfaz
const panelJuego = document.getElementById('panelJuego')
const juego = document.getElementById('juego');
const instrucciones = document.getElementById('instrucciones');
// Botones de iniciar y cerrar Juego
const btnJuego = document.getElementById('btnJuego');
const btnCloseJuego = document.getElementById('btnCloseJuego');
// Botones de iniciar y cerrar Instrucciones
const btnInstrucciones = document.getElementById('btnInstrucciones');
const btnCloseInfo = document.getElementById('btnCloseInfo');
// Boton final para volver al inicio
const btnVolver = document.getElementById('btnVolver');

// Array de Preguntas
const questions = [
    {
        question: "¿Cuál es la velocidad de la luz en el vacío?",
        options: ["a) 299,792 km/s", "b) 3,000 km/s", "c) 30,000 km/s", "d) 300,000 km/s"],
        correctAnswer: "d) 300,000 km/s"
    },
    {
        question: "¿Qué elemento químico tiene el símbolo 'H'?",
        options: ["a) Hidrógeno", "b) Helio", "c) Hierro", "d) Cobre"],
        correctAnswer: "a) Hidrógeno"
    },
    {
        question: "¿Quién formuló la teoría de la relatividad?",
        options: ["a) Isaac Newton", "b) Albert Einstein", "c) Stephen Hawking", "d) Galileo Galilei"],
        correctAnswer: "b) Albert Einstein"
    },
    {
        question: "¿Cuál es la fórmula química del agua?",
        options: ["a) A) H2O2", "b) CO2", "c) H2O", "d) NaCl"],
        correctAnswer: "b) H2O"
    },
    {
        question: "¿Qué tipo de célula es responsable de la producción de energía en el cuerpo humano?",
        options: ["a) Neurona", "b) Glóbulo rojo", "c) Célula muscular", "d) Célula epitelial"],
        correctAnswer: "c) Célula muscular"
    },
    {
        question: "¿Qué componente del sistema solar es conocido como 'la estrella de nuestro sistema'?",
        options: ["a) Júpiter", "b) La Luna", "c) El Sol", "d) Saturno"],
        correctAnswer: "c) El Sol"
    },
    {
        question: "¿Cuál es la unidad básica de la herencia biológica?",
        options: ["a) Gen", "b) Célula", "c) Átomo", "d) Proteína"],
        correctAnswer: "a) Gen"
    },
    {
        question: "¿Qué gas es necesario para la combustión?",
        options: ["a) Nitrógeno", "b) Oxígeno", "c) Dióxido de carbono", "d) Dióxido de carbono"],
        correctAnswer: "b) Oxígeno"
    },
    {
        question: "¿Qué órgano del cuerpo humano es responsable de la producción de insulina?",
        options: ["a) Páncreas", "b) Hígado", "c) Pulmón", "d) Riñón"],
        correctAnswer: "a) Páncreas"
    },
    {
        question: "¿Cuál de los siguientes elementos es el más abundante en la corteza terrestre?",
        options: ["a) Hierro", "b) Oxígeno", "c) Carbono", "d) Silicio"],
        correctAnswer: "b) Oxígeno"
    },
];
const nextBtn = document.getElementById('nextBtn');
let indiceQuest = 0;
let score = 0;

// Función para mostrar y cerrar el elemento del Juego
function mostrarJuego(){
    juego.style.display = 'flex';
    instrucciones.style.display = 'none';
    panelJuego.style.display = 'none';
    resultadoPanel.style.display = 'none'; 
    indiceQuest = 0; // Reiniciar el índice
    score = 0; // Reiniciar la puntuación
    mostrarQuest();
}
function cerrarJuego(){
    instrucciones.style.display= 'none';
    juego.style.display = 'none';
    panelJuego.style.display = 'block'
}

// Funciónes para mostrar y cerrar el elemento de las instrucciones
function mostrarInstrucciones() {
    instrucciones.style.display = 'block';
    juego.style.display = 'none';
    panelJuego.style.display = 'none';
}
function cerrarInstrucciones() {
    instrucciones.style.display= 'none';
    juego.style.display = 'none';
    panelJuego.style.display = 'block';
    resultadoPanel.style.display = 'none';
}

// Funcion para volver al inicio
function volverInicio(){
    instrucciones.style.display= 'none';
    juego.style.display = 'none';
    panelJuego.style.display = 'block';
    resultadoPanel.style.display = 'none';
}

// Eventos para mostrar y cerrar el juego
btnJuego.addEventListener('click', mostrarJuego)
btnCloseJuego.addEventListener('click', cerrarJuego)
//Eventos para mostrar y cerrar las instrucciones
btnInstrucciones.addEventListener('click', mostrarInstrucciones)
btnCloseInfo.addEventListener('click', cerrarInstrucciones) 
// Evento para volver al inicio
btnVolver.addEventListener('click', volverInicio)

// Función para mostrar los elementos del juego 
function mostrarQuest(){
    const actualQuest = questions[indiceQuest]; 
    const question = document.getElementById('actualQuest');
    const options = document.getElementById('actualOptions'); 
    const contadorQuest = document.getElementById('contadorQuest');
    const actualScore = document.getElementById('score');
    if (question && options && contadorQuest) {
        question.textContent = actualQuest.question;
        options.innerHTML = "";
        actualQuest.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("bg-gray-200", "hover:bg-gray-300", "text-gray-800", "font-bold", "py-2", "px-4", "rounded","active:bg-yellow-300" );
            button.addEventListener("click", () => check(index)); 
            options.appendChild(button);
        });
        contadorQuest.textContent = `Pregunta ${indiceQuest + 1} de ${questions.length}`;
        actualScore.textContent = `Puntuación: ${score}`
    }
};
// Funcion para chequear la opción 
function check (index){ 
    const actualQuest = questions[indiceQuest];
    if (index === actualQuest.options.indexOf(actualQuest.correctAnswer)) { 
        score += 10;
    }
    indiceQuest++; 
    if(indiceQuest < questions.length){
        mostrarQuest();
    }
    else{
        mostrarResultado();
    }
};
// Función para mostrar el Resultado al Finalizar el test
function mostrarResultado(){
    const resultado = document.getElementById('resultado');
    juego.style.display = 'none';
    resultadoPanel.style.display = 'block';
    
    if (resultado) {
        resultado.textContent = `Tu puntaje final es: ${score} puntos`;
    }

};




