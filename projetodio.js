class hero{
    ataque = ""
    
    constructor(nome, idade, tipoPersonagem){
        this.nome = nome
        this.idade = idade
        this.tipoPersonagem = tipoPersonagem
    }

    atacar(){
        if(this.tipoPersonagem === "Mago"){
            this.ataque = "magia"
            console.log(`O ${this.tipoPersonagem} atacou usando ${this.ataque}`)
        }else if(this.tipoPersonagem === "Guerreiro"){
            this.ataque = "espada"
            console.log(`O ${this.tipoPersonagem} atacou usando ${this.ataque}`)
        }else if(this.tipoPersonagem === "Monge" ){
            this.ataque = "artes marciais"
            console.log(`O ${this.tipoPersonagem} atacou usando ${this.ataque}`)
        }else if(this.tipoPersonagem === "Ninja"){
            this.ataque = "shurikens"
            console.log(`O ${this.tipoPersonagem} atacou usando ${this.ataque}`)
        }
    }
}

hero = new hero("Pablo", 15, "Guerreiro")
hero.atacar()