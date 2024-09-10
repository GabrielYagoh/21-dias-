//VARIAVEIS
let valor
let quantidade
let opção = prompt("bem vindo ao posto municipal, deseja:" +
    "\n1 abastecer com gasolina; \n2 abastecer com alcool; \n3 calibrar os pneus")

//SWITCHCASE

switch(opção){
    case "1":
        valor = parseInt (prompt("quanto deseja abastecer?"))
    quantidade = valor / 5
    console.log("Foi abastecido " + quantidade + "Litros de gasolina")
    break;

    case "2":
        valor = parseInt (prompt("quanto deseja abastecer?"))
    quantidade = valor / 3
    console.log("Foi abastecido " + quantidade + "Litros de alcool")
    break;
    default:
        console.log("Pneus calibrados!")
        break;
}

    