////Variables
let calificaciones = [];
let promedios = [];
let alumnos = [];
let nombreAlumnos = [];
let nombre;
let apellido;
let edad;
let grupo;
let direccion;
let flag = false;
let noEstudiantes = 0;
let opcion = 0;
let suma = 0;
let promedio = 0;
let arregloOrdenado = [];
let auxPromedio;
let auxNombre;
let matricula;
let matriculas = [];
let español = 0, matematicas = 0, cienciasNaturales = 0, deportes = 0, ingles = 0; 
////Constantes
let totalMaterias = 5;

///Funciones
function capturarDatosAlumno(event){
    //capturando los datos en sus variables
    nombre = document.getElementById("nombre").value;
    nombre = nombre.toUpperCase();
    apellido = document.getElementById("apellido").value;
    apellido = apellido.toUpperCase();
    edad = parseInt(document.getElementById("edad").value);
    direccion = document.getElementById("direccion").value;
    direccion = direccion.toUpperCase();
    grupo = document.getElementById("grupo").value;
    grupo = grupo.toUpperCase();
    if(nombre != "" && apellido != "" && grupo != ""){
        alumnos.push([nombre, apellido, edad, direccion, grupo]);
        nombreAlumnos.push(nombre);
        noEstudiantes++;
        mensajeAlumno.style.display = 'block';
        mensajeAlumno.innerHTML = nombre + " tiene la matricula: " + generarMatricula();
    }    
    event.preventDefault();
}

function generarMatricula(){
    matricula = nombre.slice(0,2).toUpperCase();
    matricula += apellido.slice(0,2).toUpperCase();
    matricula += noEstudiantes;
    matricula += grupo
    matriculas.push(matricula);
    return matricula;
}

function capturarCalificaciones(event){
    español = parseInt(document.getElementById("español").value);
    matematicas = parseInt(document.getElementById("matematicas").value);
    cienciasNaturales = parseInt(document.getElementById("cienciasNaturales").value);
    deportes = parseInt(document.getElementById("deportes").value);
    ingles = parseInt(document.getElementById("ingles").value);
    calificaciones.push([español, matematicas, cienciasNaturales, deportes, ingles]);
    promedio = calcularPromedio(español, matematicas, cienciasNaturales, deportes, ingles);
    if(promedio > 0){
        promedios.push(promedio);
        mensajePromedio.style.display = 'block';
        mensajePromedio.innerHTML = "Promedio: " + promedio;
    }    
    event.preventDefault();
}

function calcularPromedio(a, b, c, d, e){
    return (a+b+c+d+e)/totalMaterias;
}

function mostrarAlumnos(event){
    if(noEstudiantes === 0){
        mensajeAlumnos.style.display = 'block';
        mensajeAlumnos.innerHTML = "Aún no hay alumnos registrados en el sistema.";
    }
    else{
        mensajeAlumnos.style.display = 'block';
        mensajeAlumnos.innerHTML = "";
        for(let i = 0; i < alumnos.length; i++){
            mensajeAlumnos.innerHTML += alumnos[i] + "<br/>"
        }
    }
    event.preventDefault();
}

function totalAlumnos(event){
    if(noEstudiantes === 0){
        mensajeTotalAlumnos.style.display = 'block';
        mensajeTotalAlumnos.innerHTML = "Aún no hay alumnos registrados en el sistema.";
    }
    else{
        mensajeTotalAlumnos.style.display = 'block';
        mensajeTotalAlumnos.innerHTML = "El número de alumnos registrados es: " + noEstudiantes;
    }
    event.preventDefault();
  }

function mostrarMatriculas(event){
    if(noEstudiantes === 0){
        mensajeMatriculas.style.display = 'block';
        mensajeMatriculas.innerHTML = "Aún no hay alumnos registrados en el sistema.";
    } else {
        mensajeMatriculas.innerHTML="";
        mensajeMatriculas.style.display = 'block';
        for(let i = 0; i < alumnos.length; i ++){
            for(let j = 0; j < 1; j ++){
            mensajeMatriculas.innerHTML += alumnos[i][j] + " tiene la matricula: " + matriculas[i] + "</br>";
            }
        }
    }
    event.preventDefault();
}

function mostrarPromedios(event){
    if(noEstudiantes === 0){
        mensajePromedios.style.display = 'block';
        mensajePromedios.innerHTML = "Aún no hay alumnos registrados en el sistema.";
    } else {
        for(let i = 0; i < (promedios.length - 1); i++){
          for(let j = 0; j < (promedios.length - 1); j++){
            if(promedios[j] > promedios[j+1]){
              auxPromedio = promedios[j];
              auxNombre = nombreAlumnos[j];
              promedios[j] = promedios[j+1];
              nombreAlumnos[j] = nombreAlumnos[j+1];
              promedios[j+1] = auxPromedio;
              nombreAlumnos[j+1] = auxNombre;
            }
          }
        }
        mensajePromedios.innerHTML="";
        for(let i = (promedios.length - 1); i >= 0; i--){
            mensajePromedios.style.display = 'block';
            mensajePromedios.innerHTML += nombreAlumnos[i] + " tiene promedio de: " + promedios[i] + "</br>";
        }
    }
    event.preventDefault();
}