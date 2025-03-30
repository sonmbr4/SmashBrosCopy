/*1. Registrar un pedido (pueden ser varios productos)
2. Mostrar el total de un pedido al finalizarlo
3. Preguntar al finalizar cada pedido si se desea dar propina y de cuanto.
4. Consultar cuantas hamburguesas se han vendido ( de todos los tipos al tiempo)
5. Consultar cuantos perros se han vendido ( de todos los tipos al tiempo)
6. Consultar cuantas salchipapas se han vendido (de todos los tipos y al tiempo)
7. Consultar cuantas adiciones se han vendido (de todos los tipos y al tiempo)
8. Cuantos combos se han vendido.
9. Cuanto dinero se ha recaudado por ventas.
10. Cuanto dinero se ha recaudado por propinas.
11. Se pueden cambiar los precios de los alimentos.
12. Se pueden cambiar los precios de las adiciones
13. Se pueden cambiar los precios de los combos
14. Al cerrar las operaciones (cerrar la aplicación) se deben imprimir todas las ventas del día (productos y total de cada venta).*/



function RegistrarH() {
    let variablesH=parseInt(prompt("1. Artesanal\n 2. Clasica\n 3. Secilla"))
            switch (variablesH) {
                case 1:  
                    let unidades = prompt("cuantas Hamburguesas desea?")
                    unidades = 18000*unidades 
                    alert(unidades)
                    break;
                    case 2:
                    let ClasicaH = prompt("cuantas Hamburguesas desea?")
                    break;
                    case 3:
                    let Sencilla = prompt("cuantas Hamburguesas desea?")
                    break;
            
                default:
                    break;
            }
}

do {
    menu=parseInt(prompt("Ingrese una opcion\n 1. Hamburguesa\n 2. Perros\n 3. Salchipapas\n 4. Salir"))

    switch (menu) {
        case 1:
            alert("acabas de elegir la Hamburguesa")
            RegistrarH()
            
        break;
        case 2:
            alert("acabas de elegir la Perros")
            parseInt(prompt("1. Perra\n 2. Clasica"))
            
        break;
        case 3:
            alert("acabas de elegir la Salchipapa")
            parseInt(prompt("1. Normal\n 2. Clasica"))
        break;
        case 4:
            alert("tenga feliz dia")
        break;
        default: alert("esta no es una opcion")
        
    }
} while (menu!=4);