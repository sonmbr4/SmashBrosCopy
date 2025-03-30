function SUMA(){
    let v1=parseFloat(document.getElementById("valor_1").value);
    let v2 = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }

    let resultado = v1 + v2
    document.getElementById("solucion").value=resultado;
}
function RESTA(){
    let v1=parseFloat(document.getElementById("valor_1").value);
    let v2 = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }

    let resultado = v1 - v2
    document.getElementById("solucion").value=resultado;
}
function MULTIPLICAR(){
    let v1=parseFloat(document.getElementById("valor_1").value);
    let v2 = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }

    let resultado = v1*v2
    document.getElementById("solucion").value=resultado;
}
function DIVIDIR(){
    let v1=parseFloat(document.getElementById("valor_1").value);
    let v2 = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }

    let resultado = v1/v2
    document.getElementById("solucion").value=resultado;
}
function MULTIPLO(){
    let v1=parseFloat(document.getElementById("valor_1").value);
    let v2 = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }
    
    if(v1 % v2 == 0){
        document.getElementById("solucion").value = "Estos valores son multiplos";
    }else{
        document.getElementById("solucion").value = "No son multiplos"
    }
}
function POTENCIA(){
    let base = parseFloat(document.getElementById("valor_1").value);
    let exponente = parseFloat(document.getElementById("valor_2").value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("Los valores ingresados no son validos.");
        return;
    }

    let resultado = Math.pow(base, exponente);
    document.getElementById("solucion").value = resultado;
}
function COMPARAR(){
    let num1 = parseFloat(document.getElementById("valor_1").value);
    let num2 = parsefloat(document.getElementById("valor_2").value);

    if (num1 > num2){
        alert("El valor 1 es mayor")
        //en caso de quere hacerlo en la barra de resultado
        /*
        let resultado = "El valor 1 es mayor"
        
        document.getElementById("solucion").value=resultado; */
    }if(num1 < num2){
        alert("el valor 2 es mayor")
    }if(num1 == num2){
        alert("ambos valores son iguales")
    }
}