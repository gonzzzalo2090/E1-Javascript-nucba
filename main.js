const ingredientes = ["queso","harina","tomate","oregano","jamon","huevo","peperoni","pollo","aceite de oliva","bacon"];
console.log(ingredientes)
const pares = [];
const impares = [];


function pizzas(){
    for (let i = 0; i < ingredientes.length; i++){
        if(i % 2 == 0){
            impares.push(ingredientes[i])
        } else {
            pares.push(ingredientes[i])
        }
    }
}

pizzas(ingredientes);

console.log("Los pares son "+ pares + " y los impares son "+ impares)
console.log(pares)
console.log(impares)


