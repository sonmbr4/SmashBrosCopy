function REGISTRO(){
    let nombre = document.getElementById('usuario').value;
    let correo = document.getElementById('correos').value;
    if (nombre == "" || correo == ""){
        alert("No has ingresado datos")
        return;
    }else{
        let fila = document.createElement('tr')
        let celdaN= document.createElement('td')
        let celdaC = document.createElement('td')
        celdaN.innerText = usuario.value
        //document.write(correo)
        celdaC.innerText = correo
        fila.appendChild(celdaN)
        fila.appendChild(celdaC)
        directorio.appendChild(fila)
    }
   
  
}