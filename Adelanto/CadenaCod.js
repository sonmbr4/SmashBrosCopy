function Comparar(){
    let cadena1 = parseFloat(document.getElementById("text1").value);
    let cadena2 = parseFloat(document.getElementById("text2").value);

    if (cadena1.length == cadena2.length){
        document.getElementById("solucion").value= "Ambos textos miden lo mismo"
    }else{
        document.getElementById("solucion").value= "Los textos son de distinto largo"
    }
}