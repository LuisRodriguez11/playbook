class Pokemon {
    constructor(name){ //todos los parametros que reciba constructor es una instancia que se le pasa a la clase
        this.name = name //contexto de la clase (propiedades de la clase pokemon)
        
    
    }

    sayHello(){ //metodo o funcion
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(message){
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = Pokemon