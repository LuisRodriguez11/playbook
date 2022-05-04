console.log("Objetos");

//1.Crear un objeto vacío
const myObject = {}
console.log("Ejemplo 1: Creando un objeto vacío");
console.log(myObject);
//2.Creando un objeto con propiedades
const myObject2 = {
    name: "Luigi",
    age: 28
}
console.log("Ejemplo 2: Creando un objeto con propiedades");
console.log(myObject2);
//3.Creando un objeto con propiedades diferentes
const myobject3 = {
    name: "Benito",
    age: 5,
    nicknames: [
        "Beno",
        "Gordo",
    ],

    adress: {
        zip_code: 11291112,
        street: "1ra Priv. Virrey Buccareli",
        city: "Morelia"
    }
}

console.log("Ejemplo 3: Creando un objeto con diferentes propiedades");
console.log(myobject3);
console.log(myobject3.name);
console.log(myobject3.adress);
console.log(myobject3["adress"]);



