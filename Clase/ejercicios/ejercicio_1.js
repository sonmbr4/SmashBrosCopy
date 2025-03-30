/*elevar a la potencia dos numeros, el primero
//será la base y el segundo el exponente*/
function potencia(){
    let numero_1 = 0;
    let numero_2 = 0;
    let resultado = 0;
        alert("Acontinucacion se le pedira un numero para la base y otro para el exponente")
    
        numero_1 = prompt("ingrese el numero base")
        numero_2 = prompt("ingrese el numero exponente")
        return(
            resultado = Math.pow(numero_1, numero_2)
        )
        
    
    
}
document.write(potencia())
