let comprarDolar = 925;
let venderDolar = 905;
let comprarEuro = 989;
let venderEuro = 936;

while (true) {
    const USUARIO = prompt("Ingresa tu nombre: ");
    alert("Bienvenido" + " "+ USUARIO);

    let consultaOperacion;
    while (true) {
        consultaOperacion = prompt("¿Que operación desea realizar?: (Responda: comprar y/o vender");
        if (consultaOperacion === "comprar" || consultaOperacion === "vender") {
            break;
        } else {
            alert("Por favor, responda exactamente 'comprar' o 'vender'");
        }
    }

    let consultaDivisa;
    while (true) {
        consultaDivisa = prompt("¿Quiere operar dolar o euro?: ");
        if (consultaDivisa === "dolar" || consultaDivisa === "euro") {
            break;
        } else {
            alert("Por favor, responda exactamente 'dolar' o 'euro'");
        }
    }

    const CANTIDAD_PESOS= parseFloat(prompt("Ingresa el monto: "))

    if (consultaOperacion === "comprar" && consultaDivisa === "dolar") {
        let resultado = CANTIDAD_PESOS / comprarDolar;
        alert("la cantidad de DOLARES a recibir es de: "+" " + resultado);
    } else if (consultaOperacion === "vender" && consultaDivisa === "dolar") {
        let resultado = CANTIDAD_PESOS * venderDolar;
        alert("La cantidad de PESOS a recibir es de: "+" " + resultado);
    } else if (consultaOperacion === "comprar" && consultaDivisa === "euro") {
        let resultado = CANTIDAD_PESOS / comprarEuro;
        alert("la cantidad EUROS a recibir es de: "+" " + resultado);
    } else if (consultaOperacion === "vender" && consultaDivisa === "euro") {
        let resultado = CANTIDAD_PESOS * venderEuro;
        alert("La cantidad EUROS a recibir es de: "+" " + resultado);
    }

    let otraOperacion = prompt("¿Desea realizar otra operación? (Responda: si o no)");
    if (otraOperacion !== "si") {
        break;
    }
}

alert("Muchas gracias por usar nuestro servicio")

