class Pokemon {
    constructor(name){ //todos los parametros que reciba constructor es una instancia que se le pasa a la clase
        
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
        this.name = name //contexto de la clase (propiedades de la clase pokemon)
        
    
    }

    sayHello(){ //metodo o funcion
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(message){
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
    }
}

//Esta clase exporta este modulo
module.exports = Pokemon