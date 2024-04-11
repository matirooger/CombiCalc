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

//CONVERSOR DE TIEMPO

//FUNCION CALCULAR

function calcularTiempo() {
    try {
        var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
        var select1 = document.getElementById("select1").value;
        var select2 = document.getElementById("select2").value;
        var resultado;
        if (isNaN(numeroInicial)) {
            throw new Error();
        }

        switch (select1) {
            case "Segundos":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial;
                        break;
                    case "Minutos":
                        resultado = numeroInicial / 60;
                        break;
                    case "Horas":
                        resultado = numeroInicial / 3600;
                        break;
                    case "Días":
                        resultado = numeroInicial / 86400;
                        break;
                    case "Semanas":
                        resultado = numeroInicial / 604800;
                        break;
                    case "Meses":
                        resultado = numeroInicial / 2628000;
                        break;
                    case "Años":
                        resultado = numeroInicial / 31536000;
                        break;
                }
                break;

            case "Minutos":
                switch (select2) {
                    // Completa los casos para Minutos
                    case "Segundos":
                        resultado = numeroInicial * 60;
                        break;
                    case "Minutos":
                        resultado = numeroInicial;
                        break;
                    case "Horas":
                        resultado = numeroInicial / 60;
                        break;
                    case "Días":
                        resultado = numeroInicial / 1440;
                        break;
                    case "Semanas":
                        resultado = numeroInicial / 10080;
                        break;
                    case "Meses":
                        resultado = numeroInicial / 43800;
                        break;
                    case "Años":
                        resultado = numeroInicial / 525600;
                        break;
                }
                break;

            case "Horas":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial * 3600;
                        break;
                    case "Minutos":
                        resultado = numeroInicial * 60;
                        break;
                    case "Horas":
                        resultado = numeroInicial;
                        break;
                    case "Días":
                        resultado = numeroInicial / 24;
                        break;
                    case "Semanas":
                        resultado = numeroInicial / 168;
                        break;
                    case "Meses":
                        resultado = numeroInicial / 730.484;
                        break;
                    case "Años":
                        resultado = numeroInicial / 8765.81;
                        break;
                }
                break;

            case "Días":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial * 86400;
                        break;
                    case "Minutos":
                        resultado = numeroInicial * 1440;
                        break;
                    case "Horas":
                        resultado = numeroInicial * 24;
                        break;
                    case "Días":
                        resultado = numeroInicial;
                        break;
                    case "Semanas":
                        resultado = numeroInicial / 7;
                        break;
                    case "Meses":
                        resultado = numeroInicial / 30.44;
                        break;
                    case "Años":
                        resultado = numeroInicial / 365.25;
                        break;
                }
                break;

            case "Semanas":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial * 604800;
                        break;
                    case "Minutos":
                        resultado = numeroInicial * 10080;
                        break;
                    case "Horas":
                        resultado = numeroInicial * 168;
                        break;
                    case "Días":
                        resultado = numeroInicial * 7;
                        break;
                    case "Semanas":
                        resultado = numeroInicial;
                        break;
                    case "Meses":
                        resultado = numeroInicial / 4.34524;
                        break;
                    case "Años":
                        resultado = numeroInicial / 52.1775;
                        break;
                }
                break;

            case "Meses":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial * 2628000;
                        break;
                    case "Minutos":
                        resultado = numeroInicial * 43800;
                        break;
                    case "Horas":
                        resultado = numeroInicial * 730.484;
                        break;
                    case "Días":
                        resultado = numeroInicial * 30.44;
                        break;
                    case "Semanas":
                        resultado = numeroInicial * 4.34524;
                        break;
                    case "Meses":
                        resultado = numeroInicial;
                        break;
                    case "Años":
                        resultado = numeroInicial / 12;
                        break;
                }
                break;

            case "Años":
                switch (select2) {
                    case "Segundos":
                        resultado = numeroInicial * 31536000;
                        break;
                    case "Minutos":
                        resultado = numeroInicial * 525600;
                        break;
                    case "Horas":
                        resultado = numeroInicial * 8765.81;
                        break;
                    case "Días":
                        resultado = numeroInicial * 365.25;
                        break;
                    case "Semanas":
                        resultado = numeroInicial * 52.1775;
                        break;
                    case "Meses":
                        resultado = numeroInicial * 12;
                        break;
                    case "Años":
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

// FUNCION DE LLENADO DE TABLA

function llenarTablaTiempo() {
    var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
    var select1 = document.getElementById("select1").value;
    var Segundos;
    var Minutos;
    var Horas;
    var Dias;
    var Semanas;
    var Meses;
    var Años;

    switch (select1) {
        case "Segundos":
            Segundos = numeroInicial;
            Minutos = numeroInicial / 60;
            Horas = numeroInicial / 3600;
            Dias = numeroInicial / 86400;
            Semanas = numeroInicial / 604800;
            Meses = numeroInicial / 2628000;
            Años = numeroInicial / 31536000;
            break;

        case "Minutos":
            Segundos = numeroInicial * 60;
            Minutos = numeroInicial;
            Horas = numeroInicial / 60;
            Dias = numeroInicial / 1440;
            Semanas = numeroInicial / 10080;
            Meses = numeroInicial / 43800;
            Años = numeroInicial / 525600;
            break;

        case "Horas":
            Segundos = numeroInicial * 3600;
            Minutos = numeroInicial * 60;
            Horas = numeroInicial;
            Dias = numeroInicial / 24;
            Semanas = numeroInicial / 168;
            Meses = numeroInicial / 730.484;
            Años = numeroInicial / 8765.81;
            break;

        case "Días":
            Segundos = numeroInicial * 86400;
            Minutos = numeroInicial * 1440;
            Horas = numeroInicial * 24;
            Dias = numeroInicial;
            Semanas = numeroInicial / 7;
            Meses = numeroInicial / 30.44;
            Años = numeroInicial / 365.25;
            break;

        case "Semanas":
            Segundos = numeroInicial * 604800;
            Minutos = numeroInicial * 10080;
            Horas = numeroInicial * 168;
            Dias = numeroInicial * 7;
            Semanas = numeroInicial;
            Meses = numeroInicial / 4.34524;
            Años = numeroInicial / 52.1775;
            break;

        case "Meses":
            Segundos = numeroInicial * 2628000;
            Minutos = numeroInicial * 43800;
            Horas = numeroInicial * 730.484;
            Dias = numeroInicial * 30.44;
            Semanas = numeroInicial * 4.34524;
            Meses = numeroInicial;
            Años = numeroInicial / 12;
            break;

        case "Años":
            Segundos = numeroInicial * 31536000;
            Minutos = numeroInicial * 525600;
            Horas = numeroInicial * 8765.81;
            Dias = numeroInicial * 365.25;
            Semanas = numeroInicial * 52.1775;
            Meses = numeroInicial * 12;
            Años = numeroInicial;
            break;
    }

    // Asigna los resultados a los campos respectivos
    document.getElementById("Segundos").value = Segundos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Minutos").value = Minutos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Horas").value = Horas.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Dias").value = Dias.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Semanas").value = Semanas.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Meses").value = Meses.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Años").value = Años.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });

    document.getElementById("num").value = numeroInicial;
    document.getElementById("unidad").value = select1;
}

