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
        "Gordo"
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
console.log(myobject3.adress); //forma 1 de escribir el objeto con sus atributos
console.log(myobject3["adress"]);//forma 2 de escribir el onjeto con sus atributos
//4.Creando un objeto con metodos
const pet = {
    name: "Benito",

    // Esta es una función que se guarda como propiedad
    sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} "Te saluda en idioma perro: Wau"`)
    }
}

console.log("Ejemplo 4: Creando un objeto con metodos");
pet.sayHello(); //Llamar el objeto con el metodo
//5. Creando un objeto que reciba parametros
const myPet = {
    name: "Max",

    sayHello: function(yourPet){
        console.log(`${this.name} Says hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Creando un objeto que reciba parámetros");
myPet.sayHello("Tulio"); //Meter el valor del parámetro en este caso string dentro del parentesis




