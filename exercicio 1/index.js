const  temFome = prompt ("você está com fome? (sim/não)")
const  temDinheiro = prompt ("você têm dinheiro?(sim/não)")
const  temRestauranteAberto = prompt ("tem restaurante aberto?(sim/não)")

if (temFome === "não" || temDinheiro == "não"){
    console.log ("Hoje a janta será em casa");
} else if (temDinheiro === "sim" && temRestauranteAberto === "sim" && temFome === "sim"){
    console.log("hoje o jantar será em paris 6");
} else { 
    console.log("Peça um delivery");
}