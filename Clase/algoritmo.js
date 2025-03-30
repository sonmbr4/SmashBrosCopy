/*
//sumar();   //hoisting

// function sumar(a,b){
//     //let a = parseInt(prompt('Ingrese el primer numero'));
//    // let b = parseInt(prompt('Ingrese el segundo numero'));
//     alert('la suma es: '+ (a+b));
// }
function sumar(...lista){
    let acum=0;
    for(i=0;i<lista.length;i++){
        acum= acum+lista[i];
    }
    return(acum);
}
let resultado = sumar(5,6);
console.log(resultado)

let r2= sumar(5,6,1,5,30,0,5,6,1,5,30,0);
console.log(r2)

*/

// funciones
// sumar dos enteros
//dividir dos enteros
// multiplicar muchos enteros (...)
// sacar raiz de un número
// calcular mayor entre muchos enteros(...)
// encontrar menor entre muchos enteros(...)
//elevar a la potencia dos numeros, el primero
//será la base y el segundo el exponente

/*function sumar(...lista){
    let acum=0;
    for(i=0;i<lista.length;i++){
        acum= acum+lista[i];
    }
    return(acum);
}

let resultado = sumar(5,6)
//alert('La suma de tus noas es'+resultado)




function dividir(a,b){
return(a/b)

}
let promedio = dividir(resultado, 3);
alert(promedio);

function multiplicar(...lista){
    let acum=0;
    for(i=0;i<lista.length;i++){
        acum= acum*lista[i];
    }
    return(acum);
}
let multiplicacion = multiplicar(5,6,7)
alert(multiplicacion)*/

