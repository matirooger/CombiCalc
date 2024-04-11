//EFECTOS DEL MENU

const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('myNavbar');

menuButton.addEventListener('click', (event) => {
// Evita que el clic en el botón cierre el menú inmediatamente
event.stopPropagation();

if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
} else {
    navbar.style.display = 'block';
}
});

document.addEventListener('click', (event) => {
// Comprueba si el menú está abierto y si el clic no ocurrió dentro del menú
if (navbar.style.display === 'block' && event.target !== menuButton && !navbar.contains(event.target)) {
    navbar.style.display = 'none';
}
});

//CONVERSOR DE PESO

//FUNCION CALCULAR
function calcular() {
    // Obtener los valores del usuario
    var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;

    // Realizar conversiones
    var resultado;
    try {

        if (isNaN(numeroInicial)) {
            throw new Error();
            }
        switch(select1) {
        case "Miligramos":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial;
                    break;
                case "Gramos":
                    resultado = numeroInicial / 1000;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial / 1000000;
                    break;
                case "Toneladas":
                    resultado = numeroInicial / 1e9;
                    break;
                case "Libras":
                    resultado = numeroInicial * 0.00000220462;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 0.00003527396;
                    break;
                case "Quintal":
                    resultado = numeroInicial / 1e8;
                    break;
                case "Stone":
                    resultado = numeroInicial * 1.5747e-7;
                    break;
            }
        break;

        case "Gramos":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 1000;
                    break;
                case "Gramos":
                    resultado = numeroInicial;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial / 1000;
                    break;
                case "Toneladas":
                    resultado = numeroInicial / 1e6;
                    break;
                case "Libras":
                    resultado = numeroInicial * 0.00220462;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 0.03527396;
                    break;
                case "Quintal":
                    resultado = numeroInicial / 100;
                    break;
                case "Stone":
                    resultado = numeroInicial * 0.00015747;
                    break;
            }
        break;

        case "Kilogramos":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 1e6;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 1000;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial;
                    break;
                case "Toneladas":
                    resultado = numeroInicial / 1000;
                    break;
                case "Libras":
                    resultado = numeroInicial * 2.20462;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 35.27396;
                    break;
                case "Quintal":
                    resultado = numeroInicial / 10;
                    break;
                case "Stone":
                    resultado = numeroInicial * 0.15747;
                    break;
            }
        break;

        case "Toneladas":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 1e9;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 1e6;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial * 1000;
                    break;
                case "Toneladas":
                    resultado = numeroInicial;
                    break;
                case "Libras":
                    resultado = numeroInicial * 2204.62;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 35273.96;
                    break;
                case "Quintal":
                    resultado = numeroInicial * 10;
                    break;
                case "Stone":
                    resultado = numeroInicial * 157.47;
                    break;
            }
        break;

        case "Libras":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 453592;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 453.592;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial * 0.453592;
                    break;
                case "Toneladas":
                    resultado = numeroInicial * 0.000453592;
                    break;
                case "Libras":
                    resultado = numeroInicial;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 16;
                    break;
                case "Quintal":
                    resultado = numeroInicial * 0.0453592;
                    break;
                case "Stone":
                    resultado = numeroInicial * 0.0714286;
                    break;
            }
        break;

        case "Onzas":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 28349.5;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 28.3495;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial * 0.0283495;
                    break;
                case "Toneladas":
                    resultado = numeroInicial * 2.83495e-5;
                    break;
                case "Libras":
                    resultado = numeroInicial * 0.0625;
                    break;
                case "Onzas":
                    resultado = numeroInicial;
                    break;
                case "Quintal":
                    resultado = numeroInicial * 0.000283495;
                    break;
                case "Stone":
                    resultado = numeroInicial * 0.00446429;
                    break;
            }
        break;

        case "Quintal":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 1e8;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 100;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial * 0.1;
                    break;
                case "Toneladas":
                    resultado = numeroInicial * 0.0001;
                    break;
                case "Libras":
                    resultado = numeroInicial * 220.462;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 3527.396;
                    break;
                case "Quintal":
                    resultado = numeroInicial;
                    break;
                case "Stone":
                    resultado = numeroInicial * 1.578;
                    break;
            }
        break;

        case "Stone":
            switch(select2) {
                case "Miligramos":
                    resultado = numeroInicial * 6.35e6;
                    break;
                case "Gramos":
                    resultado = numeroInicial * 6350.29;
                    break;
                case "Kilogramos":
                    resultado = numeroInicial * 6.35;
                    break;
                case "Toneladas":
                    resultado = numeroInicial * 0.00635;
                    break;
                case "Libras":
                    resultado = numeroInicial * 14;
                    break;
                case "Onzas":
                    resultado = numeroInicial * 224;
                    break;
                case "Quintal":
                    resultado = numeroInicial * 0.635;
                    break;
                case "Stone":
                    resultado = numeroInicial;
                    break;
            }
        break;

        default:
            resultado = "Error";
        break;
            
            
        }
    } catch (Error) {
        resultado = "Error";
    }
    

    // Mostrar el resultado
    document.getElementById("Resultado").value = resultado.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
}

function llenarTablaPeso(){
    var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
    var select1 = document.getElementById("select1").value;
    var Miligramos;
    var Gramos;
    var Kilogramos;
    var Toneladas;
    var Libras;
    var Onzas;
    var Quintal;
    var Stone;

    switch(select1){
        case "Miligramos":
            Miligramos = numeroInicial;
            Gramos = numeroInicial / 1000;
            Kilogramos = numeroInicial / 1000000;
            Toneladas = numeroInicial / 1e9;
            Libras = numeroInicial * 0.00000220462;
            Onzas = numeroInicial * 0.00003527396;
            Quintal = numeroInicial / 1e8;
            Stone = numeroInicial * 1.5747e-7;
            break;

        case "Gramos":
            Miligramos = numeroInicial * 1000;
            Gramos = numeroInicial;
            Kilogramos = numeroInicial / 1000;
            Toneladas = numeroInicial / 1e6;
            Libras = numeroInicial * 0.00220462;
            Onzas = numeroInicial * 0.03527396;
            Quintal = numeroInicial / 100;
            Stone = numeroInicial * 0.00015747;
            break;
        
         case "Kilogramos":
            Miligramos = numeroInicial * 1e6;
            Gramos = numeroInicial * 1000;
            Kilogramos = numeroInicial;
            Toneladas = numeroInicial / 1000;
            Libras = numeroInicial * 2.20462;
            Onzas = numeroInicial * 35.27396;
            Quintal = numeroInicial / 10;
            Stone = numeroInicial * 0.15747;
            break;

        case "Toneladas":
            Miligramos = numeroInicial * 1e9;
            Gramos = numeroInicial * 1e6;
            Kilogramos = numeroInicial * 1000;
            Toneladas = numeroInicial;
            Libras = numeroInicial * 2204.62;
            Onzas = numeroInicial * 35273.96;
            Quintal = numeroInicial * 10;
            Stone = numeroInicial * 157.47;
            break;

        case "Libras":
            Miligramos = numeroInicial * 453592;
            Gramos = numeroInicial * 453.592;
            Kilogramos = numeroInicial * 0.453592;
            Toneladas = numeroInicial * 0.000453592;
            Libras = numeroInicial;
            Onzas = numeroInicial * 16;
            Quintal = numeroInicial * 0.0453592;
            Stone = numeroInicial * 0.0714286;
            break;

        case "Onzas":
            Miligramos = numeroInicial * 28349.5;
            Gramos = numeroInicial * 28.3495;
            Kilogramos = numeroInicial * 0.0283495;
            Toneladas = numeroInicial * 2.83495e-5;
            Libras = numeroInicial * 0.0625;
            Onzas = numeroInicial;
            Quintal = numeroInicial * 0.000283495;
            Stone = numeroInicial * 0.00446429;
            break;

        case "Quintal":
            Miligramos = numeroInicial * 1e8;
            Gramos = numeroInicial * 100;
            Kilogramos = numeroInicial * 0.1;
            Toneladas = numeroInicial * 0.0001;
            Libras = numeroInicial * 220.462;
            Onzas = numeroInicial * 3527.396;
            Quintal = numeroInicial;
            Stone = numeroInicial * 1.578;
            break;

        case "Stone":
            Miligramos = numeroInicial * 6.35e6;
            Gramos = numeroInicial * 6350.29;
            Kilogramos = numeroInicial * 6.35;
            Toneladas = numeroInicial * 0.00635;
            Libras = numeroInicial * 14;
            Onzas = numeroInicial * 224;
            Quintal = numeroInicial * 0.635;
            Stone = numeroInicial;
            break;
    }

    //Asigna los resultados a los campos respectivos

    document.getElementById("Miligramos").value = Miligramos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Gramos").value = Gramos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Kilogramos").value = Kilogramos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Toneladas").value = Toneladas.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Libras").value = Libras.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Onzas").value = Onzas.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Quintal").value = Quintal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
    document.getElementById("Stone").value = Stone.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;

    document.getElementById("num").value = numeroInicial;
    document.getElementById("unidad").value = select1;
}