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

//CONVERSOR DE TEMPERATURA

//FUNCION CALCULAR

function calcularTemperatura() {
    try {
        var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
        var select1 = document.getElementById("select1").value;
        var select2 = document.getElementById("select2").value;
        var resultado;
        if (isNaN(numeroInicial)) {
            throw new Error();
            }

        switch (select1) {
            case "Celsius":
                switch (select2) {
                    case "Celsius":
                        resultado = numeroInicial;
                        break;
                    case "Fahrenheit":
                        resultado = (numeroInicial * 9/5) + 32;
                        break;
                    case "Kelvin":
                        resultado = numeroInicial + 273.15;
                        break;
                    case "Rankine":
                        resultado = (numeroInicial + 273.15) * 9/5;
                        break;
                    case "Réaumur":
                        resultado = numeroInicial * 4/5;
                        break;
                }
                break;

            case "Fahrenheit":
                switch (select2) {
                    case "Celsius":
                        resultado = (numeroInicial - 32) * 5/9;
                        break;
                    case "Fahrenheit":
                        resultado = numeroInicial;
                        break;
                    case "Kelvin":
                        resultado = (numeroInicial + 459.67) * 5/9;
                        break;
                    case "Rankine":
                        resultado = numeroInicial + 459.67;
                        break;
                    case "Réaumur":
                        resultado = (numeroInicial - 32) * 4/9;
                        break;
                }
                break;

            case "Kelvin":
                switch (select2) {
                    case "Celsius":
                        resultado = numeroInicial - 273.15;
                        break;
                    case "Fahrenheit":
                        resultado = (numeroInicial * 9/5) - 459.67;
                        break;
                    case "Kelvin":
                        resultado = numeroInicial;
                        break;
                    case "Rankine":
                        resultado = numeroInicial * 9/5;
                        break;
                    case "Réaumur":
                        resultado = (numeroInicial - 273.15) * 4/5;
                        break;
                }
                break;

            case "Rankine":
                switch (select2) {
                    case "Celsius":
                        resultado = (numeroInicial - 491.67) * 5/9;
                        break;
                    case "Fahrenheit":
                        resultado = numeroInicial - 459.67;
                        break;
                    case "Kelvin":
                        resultado = numeroInicial * 5/9;
                        break;
                    case "Rankine":
                        resultado = numeroInicial;
                        break;
                    case "Réaumur":
                        resultado = (numeroInicial - 491.67) * 4/9;
                        break;
                }
                break;

            case "Réaumur":
                switch (select2) {
                    case "Celsius":
                        resultado = numeroInicial * 5/4;
                        break;
                    case "Fahrenheit":
                        resultado = (numeroInicial * 9/4) + 32;
                        break;
                    case "Kelvin":
                        resultado = (numeroInicial * 5/4) + 273.15;
                        break;
                    case "Rankine":
                        resultado = (numeroInicial * 9/4) + 491.67;
                        break;
                    case "Réaumur":
                        resultado = numeroInicial;
                        break;
                }
                break;
        }

        
    } catch (error) {
        resultado = "Error";
    }
    document.getElementById("Resultado").value = resultado.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });;
}

//FUNCION LLENAR TABLA

function llenarTablaTemperatura() {
    var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
    var select1 = document.getElementById("select1").value;
    var Celsius;
    var Fahrenheit;
    var Kelvin;
    var Rankine;
    var Reaumur;

    switch(select1) {
        case "Celsius":
            Celsius = numeroInicial;
            Fahrenheit = (numeroInicial * 9/5) + 32;
            Kelvin = numeroInicial + 273.15;
            Rankine = (numeroInicial + 273.15) * 9/5;
            Reaumur = numeroInicial * 4/5;
            break;

        case "Fahrenheit":
            Celsius = (numeroInicial - 32) * 5/9;
            Fahrenheit = numeroInicial;
            Kelvin = (numeroInicial + 459.67) * 5/9;
            Rankine = numeroInicial + 459.67;
            Reaumur = (numeroInicial - 32) * 4/9;
            break;

        case "Kelvin":
            Celsius = numeroInicial - 273.15;
            Fahrenheit = (numeroInicial * 9/5) - 459.67;
            Kelvin = numeroInicial;
            Rankine = numeroInicial * 9/5;
            Reaumur = (numeroInicial - 273.15) * 4/5;
            break;

        case "Rankine":
            Celsius = (numeroInicial - 491.67) * 5/9;
            Fahrenheit = numeroInicial - 459.67;
            Kelvin = numeroInicial * 5/9;
            Rankine = numeroInicial;
            Reaumur = (numeroInicial - 491.67) * 4/9;
            break;

        case "Réaumur":
            Celsius = numeroInicial * 5/4;
            Fahrenheit = (numeroInicial * 9/4) + 32;
            Kelvin = (numeroInicial * 5/4) + 273.15;
            Rankine = (numeroInicial * 9/4) + 491.67;
            Reaumur = numeroInicial;
            break;
    }

    // Asigna los resultados a los campos respectivos
    document.getElementById("Celsius").value = Celsius.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Fahrenheit").value = Fahrenheit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Kelvin").value = Kelvin.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Rankine").value = Rankine.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Reaumur").value = Reaumur.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });


    document.getElementById("num").value = numeroInicial;
    document.getElementById("unidad").value = select1;
}
