"use strict"

let colocacao = 5

switch (colocacao){
    case 1:
        console.log("Você está na colocação 1")
        break
    case 2:
        console.log("Você está na colocação 2")
        break
    case 3:
        console.log("Você está na colocação 3")
        break
    case 4: case 5: case 6:
        console.log("Premio de Participacao")
        break
    default:
        console.log("Você não está no Pódio")
        break
}