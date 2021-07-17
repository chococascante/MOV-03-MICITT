const obj = {
  nombre: "Luis",
  apellido: "Cascante",
};

obj.edad = 27;
obj.nombre = "Luisa";

delete obj.apellido;
console.log(obj["nombre"]);

console.log(obj);
modifiqueAtributo(obj, "direccion", "Casa");
console.log(obj);

function modifiqueAtributo(obj, nombreAtributo, nuevoValor) {
  obj[nombreAtributo] = nuevoValor;
}

console.log('Object.hasOwnProperty', obj.hasOwnProperty("nombre"));

console.log('Object.entries',(Object.entries(obj));

console.log('Object.keys',Object.keys(obj));

for (let atributo in obj) {
  console.log(obj[atributo]);
}
