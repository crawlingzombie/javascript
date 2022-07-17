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

const libro_favorito = "Dago - El esclavo";




const lista = [ nombre, edad, pregunta, fecha, libro_favorito];

console.log(lista);