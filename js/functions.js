console.log("Pruba de conexion");
// TIPO DE VARIABLES
// const para variables constantes
const pi = 3.1416;
const pulgada = 2.54;
const name = "Alexis Arenas";
// var para variables globales del mismo archivos
var cal_days = 15;
// let para variables de bloque o locales
let j = 0;
let count = 1;

//FORMAS DE IMPRESION
//alert
// alert(name);
//console
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);
// pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Alexis Arenas</h1>"; // cuando uso innerHTML identifica que es h1 mientras el text no
document.getElementById("box_two").innerText = "<h1>Alexis Arenas</h1>";
//librerias
Swal.fire({
    icon : 'info',
    title: 'Alexis',
    text: name,
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
}  )

//TIPOS DE DATOS
//numericos
var number_one =  10;
var number_two = 2.3;
//string
var text = "Soy un texto";
// booleanos
var boolean =true; // or false
//aray
let array_num = [1,2,3,4,5,6];
let array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "sabado", "Domingo"];
let array_mixt = [1, "a", 2.5, "c"];
let array_mul = [
    {name:"Rolly", last_name: "Arenas", age: "3"},
    {name:"Alexis", last_name: "Arenas", age: "3"},
    {name:"Bitch", last_name: "Arenas", age: "3"},
    {name:"Majo", last_name: "Arenas", age: "3"},
];

//OPERADORES BASICOS
// suma
var suma =number_one + number_two;
console.log("Suma= " + suma);
//resta
var resta = number_one - number_two;
console.log("Resta= " + resta);
// multiplicacion
var multi =number_one * number_two;
console.log("Multiplicacion= " + multi);
//division
var divi = number_one / number_two;
console.log("Division= " + divi);
//modulo
var modulo = number_one % number_two;
console.log("Modulo= " + modulo);

console.log(
    "Suma= " + suma + "\n" +
    "Resta= " + resta + "\n" +
    "Multiplicacion= " + multi + "\n" +
    "Division= " + divi + "\n" +
    "Modulo= " + modulo
);

var respuesta = 
    "Suma= " + suma + "<br>" +
    "Resta= " + resta + "<br>" +
    "Multiplicacion= " + multi + "<br>" +
    "Division= " + divi.toFixed(2) + "<br>" +
    "Modulo= " + modulo.toFixed(2);

// Swal.fire(respuesta);

// Swal.fire({
//     showConfirmButton: false,
//     background: '#fff',
//     icon: 'success',
//     title: 'Respuesta:',
//     html: respuesta
// });

//###OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES(inverse,)
// AND && con if
var bool = false;
var numeric = "7";
if(!bool && numeric === "7"){ // bool == true; el triple igual compara el valor y el tipo de dato
    console.log("ENTRA IF");

} else{
    console.log("ENTRA ELSE");
}
// OR || xon un if 
var age = 31;
if(age == 32 || numeric === "7"){
    console.log("Entra if");
    age+=2;
} else{
    console.log("Entra else");
    age-=2;
}
console.log(age);

// FOR
console.log(array_text.length);//identifica el largo del array en todos los lenguajes
for(let i = 0; i<array_text.length; i++){
    console.log(array_text[i] +" " + (i+1));
}

//WHILE
let posicion = 0;
while (posicion<array_text.length){
    console.log(array_text[posicion]+(posicion+1));
    posicion++;
}
// DO WHILE
let w = 0;
do{
    console.log(array_text[w]+(w+1));
    w++;
} while(w<array_text.length);

// ####EVENTOS Y FUNCIONES
function load_page(){
    // ejm();
    // ejm2();
}

function ejm(){
    alert("Bienvenido");
}
function ejm2(){
    alert("Bienvenido dos")
}
function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if(box_onblur.value.length<=2){
        alert("PROBLEMAS CON EL TEXTO");
    }
}
const btn_changeColor = document.querySelector("#change_color");
btn_changeColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
});

const form       = document.getElementById("form_register");
const nombres    = document.getElementById("form_register");
const apellidos  = document.getElementById("form_register");
const validation = document.getElementById("form_register");

form.addEventListener("sumbit", name_event => {
    name_event.preventDefault();
    let info = "";
    if(nombres.value.length<=2 || apellidos.value.length<=2){
        info += "Nombres o apellidos incorrectos"
        validation.style.color = "red"
    } else{
        info += "Su nombre es: " + nombres + " " + apellidos.value;
        validation.style.color = "green"
    }
    validation.innerText = info;
});
function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getFullYear);
    for (let i = 0; i < array_mul.length; i++) {
        console.log(array_mul[i].name);
    }
}
function validate(){
    let nombres= document.getElementById("nombres").value
    console.log(nombres);
    alert(nombres.toLowerCase());//UpperCase convierte a mayuscula y LowerCase a minuscula index of utiliza el contenido del indice para encontrar el contenido del indice
    if (nombres.length > 2){
    document.getElementById("apellidos").disabled = false;
    document.getElementById("apellidos").focus();
    document.getElementById("nombres").value = "";
    }
}
