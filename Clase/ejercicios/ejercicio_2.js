/*padawan
ordenamiento burbuja  -> explican en que consiste en SUS PROPIAS PALABRAS
busqueda binario ->explican con sus propias palabras

trainee
inserción binaria
*/
function Ordenar(){
    let ordenado = false;

    while(!ordenado){
        ordendo = true;

        for(let i=o; i< this.length -1; i++){
            if(this[i]>this[i+1]){
                let aux = this[i+1];
                this[i+1] = this[i]
                this[i] = aux;

                ordenado=false;
            }
        }

    }
    return this;

}
let numeros = [7, 2, 5, 13, 11, 29, 23];
console.log(numeros);

console.log();

let numerosOrdenados = numeros.Ordenar();

console.log(numerosOrdenados);  // [2, 5, 7, 11, 13, 23, 29];




/*Array.prototype.ordenarDatosBurbuja = function () {
    let ordenado = false;

    while(!ordenado) {
        ordenado = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temporal = this[i + 1];
                this[i + 1] = this[i];
                this[i] = temporal;

                ordenado = false;
            }
        }
    }

    return this;
}

let numeros = [7, 2, 5, 13, 11, 29, 23];
console.log(numeros);

console.log();

let numerosOrdenados = numeros.ordenarDatosBurbuja();

console.log(numerosOrdenados);  // [2, 5, 7, 11, 13, 23, 29];

*/
