const nombre = "Eduardo Javier Servin";
const edad = 38;
const pregunta = {
    "¿Eres desarrollador?": true,
};

const fecha_nacimiento = new Date (1983,9,31);

const fecha= {
    dia:fecha_nacimiento.getDate(),
     mes:fecha_nacimiento.getMonth()+1,
      anyo:fecha_nacimiento.getFullYear()
}
console.log (fecha)

const libro_favorito = {
    titulo: "Dago- El esclavo",
    autor: "Robin Wood",
    fecha: "Diciembre de 1990",
    url: "https://www.facebook.com/media/set/?set=a.1391812607616483&type=3"
}



const lista = [ nombre, edad, pregunta, fecha, libro_favorito];

console.log(lista);