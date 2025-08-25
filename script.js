let edad=30;
let nombre="Luigi";
let apellido="Gonzalez";
const FNacimiento=1993;
let masculino=true;
let estadoCivil="Soltero";
edad + 5;
let nombreCompleto= nombre + " " + apellido;
console.log("Mi nombre es " + nombreCompleto + ", tengo " + edad + " años, nací en el año " + FNacimiento + ", soy " + estadoCivil + " y es " + masculino + " que soy hombre.");
console.log("En 5 años tendré " + (edad + 5) + " años.");
alert("Mi nombre es " + nombreCompleto + ", tengo " + edad + " años, nací en el año " + FNacimiento + ", soy " + estadoCivil + " y es " + masculino + " que soy hombre.");
let amor=prompt("¿Cuál es tu estado civil?");
if (amor=="Casado"|| amor=="casado" || amor=="CASADO") {
    alert("Felicidades por tu matrimonio");
} else if (amor=="Soltero" || amor=="soltero" || amor=="SOLTERO"){
    alert("Suerte en el amor");
} else {
    alert("Estado civil no reconocido");
}