
// 1era PREENTREGA

// Consigna:
// Crear algoritmo con una condicion
// Crear algoritmo utilizando un ciclo
// simulador interactivo incluyendo: prompt, alert console.log


//Bienvenida

alert("Bienvenido al simulador de presupuesto interactivo.");

//Variables

let presupuestoMaximo = parseInt(prompt("Ingresa tu presupuesto máximo para la realizacion de los trabajos:"));
let iva = 22;
let total = 0;

//Condicion y estructura de repeticion para ingreso de datos presupuesto y calculo iva

if (presupuestoMaximo <= 0) {
    alert("Se debe ingresar un monto válido");
} else {
    while (true) {
        let nombreProducto = prompt("Ingresa el nombre del producto (o escribe 'salir' para terminar):");
        if (nombreProducto.toLowerCase() === "salir")
            break;

        let precioProducto = parseFloat(prompt("Ingresa el precio de " + nombreProducto));
        if (precioProducto <= 0) {
            alert("Se debe ingresar un monto válido");
            continue;
        }

        let precioConImpuesto = precioProducto + (precioProducto * iva / 100);
        total = total + precioConImpuesto;

        alert(nombreProducto + " +iva: " + precioConImpuesto + " Total:" + total)
    }

    // Verifica si supera presupuesto maximo
    if (total > presupuestoMaximo) {
        alert("Has superado tu presupuesto máximo de " + presupuestoMaximo + "Total: " + total);
    } else {
        alert("Presupuesto aceptable. Total: " + total);
    }

    console.log("Presupuesto máximo: " + presupuestoMaximo);
    console.log("Total final: " + total);

}
