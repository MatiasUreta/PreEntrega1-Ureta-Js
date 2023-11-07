let comprarDolar = 925;
let venderDolar = 905;
let comprarEuro = 989;
let venderEuro = 936;

while (true) {
    const user = prompt("Ingresa tu nombre: ");
    alert("Bienvenido" + " "+ user);
    let consultaOperacion = prompt("¿Que operación desea realizar?: (Responda: comprar y/o vender");
    let consultaDivisa = prompt("¿Quiere operar dolar o euro?: ");
    const CANTIDAD_PESOS= parseFloat(prompt("Ingresa el monto: "))

    if (consultaOperacion === "comprar" && consultaDivisa === "dolar") {
        let resultado = CANTIDAD_PESOS / comprarDolar;
        alert("la cantidad a comprar es: "+" " + resultado);
    } else if (consultaOperacion === "vender" && consultaDivisa === "dolar") {
        let resultado = CANTIDAD_PESOS * venderDolar;
        alert("La cantidad a vender es: "+" " + resultado);
    } else if (consultaOperacion === "comprar" && consultaDivisa === "euro") {
        let resultado = CANTIDAD_PESOS / comprarEuro;
        alert("la cantidad a comprar es: "+" " + resultado);
    } else if (consultaOperacion === "vender" && consultaDivisa === "euro") {
        let resultado = CANTIDAD_PESOS * venderEuro;
        alert("La cantidad a vender es: "+" " + resultado);
    }

    let otraOperacion = prompt("¿Desea realizar otra operación? (Responda: si o no)");
    if (otraOperacion !== "si") {
        break;
    }
}


alert("Muchas gracias por usar nuestro servicio")