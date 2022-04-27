class Pokemon {
    constructor(name){ //todos los parametros que reciba constructor es una instancia que se le pasa a la clase
        this.name = name //contexto de la clase (propiedades de la clase pokemon)
        this.message = this.message
    }

    sayHello(){ //metodo o funcion
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(){
        console.log(`Mi Pokemon ${this.name} dice: ${this.message}`)
    }
}

module.exports = Pokemon