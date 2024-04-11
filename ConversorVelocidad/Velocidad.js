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

//CONVERSOR DE VELOCIDAD

//FUNCION CALCULAR

function calcularVelocidad() {
    try {
        var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
        var select1 = document.getElementById("select1").value;
        var select2 = document.getElementById("select2").value;
        var resultado;

        if (isNaN(numeroInicial)) {
            throw new Error();
        }

        switch (select1) {
            case "MetrosPorSegundo":
                switch (select2) {
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 3.6;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial * 2.23694;
                        break;
                    case "Nudos":
                        resultado = numeroInicial * 1.94384;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial * 3.28084;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 1000;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 1609.34;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "KilometrosPorHora":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial / 3.6;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial / 1.60934;
                        break;
                    case "Nudos":
                        resultado = numeroInicial / 1.852;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial / 1.09728;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 3600;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 5793.64;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "MillasPorHora":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial / 2.23694;
                        break;
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 1.60934;
                        break;
                    case "Nudos":
                        resultado = numeroInicial / 1.15078;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial / 1.46667;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 5793.64;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 3600;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "Nudos":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial / 1.94384;
                        break;
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 1.852;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial * 1.15078;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial / 0.592484;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 3600;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 3238.84;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "PiesPorSegundo":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial / 3.28084;
                        break;
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 1.09728;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial * 1.46667;
                        break;
                    case "Nudos":
                        resultado = numeroInicial * 0.592484;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 3280.84;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 5280;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "KilometrosPorSegundo":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial * 1000;
                        break;
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 3600;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial * 5793.64;
                        break;
                    case "Nudos":
                        resultado = numeroInicial * 3238.84;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial * 3280.84;
                        break;
                    case "MillasPorSegundo":
                        resultado = numeroInicial / 1.60934;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

            case "MillasPorSegundo":
                switch (select2) {
                    case "MetrosPorSegundo":
                        resultado = numeroInicial * 1609.34;
                        break;
                    case "KilometrosPorHora":
                        resultado = numeroInicial * 5793.64;
                        break;
                    case "MillasPorHora":
                        resultado = numeroInicial * 3600;
                        break;
                    case "Nudos":
                        resultado = numeroInicial * 3238.84;
                        break;
                    case "PiesPorSegundo":
                        resultado = numeroInicial * 5280;
                        break;
                    case "KilometrosPorSegundo":
                        resultado = numeroInicial / 3600;
                        break;
                    default:
                        resultado = numeroInicial;
                        break;
                }
                break;

    // Puedes agregar más casos según sea necesario para otras unidades de velocidad
    }
    

} catch (error) {
    resultado = "Error";
}

    // Muestra el resultado en el campo "Resultado" con formato de separación de miles y hasta 10 decimales
    document.getElementById("Resultado").value = resultado.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
}

//FUNCION LLENAR TABLA

function llenarTablaVelocidad() {
    var numeroInicial = parseFloat(document.getElementById("NumeroInicial").value);
    var select1 = document.getElementById("select1").value;
    var MetrosPorSegundo;
    var KilometrosPorHora;
    var MillasPorHora;
    var Nudos;
    var PiesPorSegundo;
    var KilometrosPorSegundo;
    var MillasPorSegundo;

    switch(select1) {
        case "MetrosPorSegundo":
            MetrosPorSegundo = numeroInicial;
            KilometrosPorHora = numeroInicial * 3.6;
            MillasPorHora = numeroInicial * 2.23694;
            Nudos = numeroInicial * 1.94384;
            PiesPorSegundo = numeroInicial * 3.28084;
            KilometrosPorSegundo = numeroInicial / 1000;
            MillasPorSegundo = numeroInicial / 1609.34;
            break;

        case "KilometrosPorHora":
            MetrosPorSegundo = numeroInicial / 3.6;
            KilometrosPorHora = numeroInicial;
            MillasPorHora = numeroInicial / 1.60934;
            Nudos = numeroInicial / 1.852;
            PiesPorSegundo = numeroInicial / 1.09728;
            KilometrosPorSegundo = numeroInicial / 3600;
            MillasPorSegundo = numeroInicial / 5793.64;
            break;

        case "MillasPorHora":
            MetrosPorSegundo = numeroInicial / 2.23694;
            KilometrosPorHora = numeroInicial * 1.60934;
            MillasPorHora = numeroInicial;
            Nudos = numeroInicial / 1.15078;
            PiesPorSegundo = numeroInicial / 1.46667;
            KilometrosPorSegundo = numeroInicial / 5793.64;
            MillasPorSegundo = numeroInicial / 3600;
            break;

        case "Nudos":
            MetrosPorSegundo = numeroInicial / 1.94384;
            KilometrosPorHora = numeroInicial * 1.852;
            MillasPorHora = numeroInicial * 1.15078;
            Nudos = numeroInicial;
            PiesPorSegundo = numeroInicial / 0.592484;
            KilometrosPorSegundo = numeroInicial / 3600;
            MillasPorSegundo = numeroInicial / 3238.84;
            break;

        case "PiesPorSegundo":
            MetrosPorSegundo = numeroInicial / 3.28084;
            KilometrosPorHora = numeroInicial * 1.09728;
            MillasPorHora = numeroInicial * 1.46667;
            Nudos = numeroInicial * 0.592484;
            PiesPorSegundo = numeroInicial;
            KilometrosPorSegundo = numeroInicial / 3280.84;
            MillasPorSegundo = numeroInicial / 5280;
            break;

        case "KilometrosPorSegundo":
            MetrosPorSegundo = numeroInicial * 1000;
            KilometrosPorHora = numeroInicial * 3600;
            MillasPorHora = numeroInicial * 5793.64;
            Nudos = numeroInicial * 3238.84;
            PiesPorSegundo = numeroInicial * 3280.84;
            KilometrosPorSegundo = numeroInicial;
            MillasPorSegundo = numeroInicial / 1.60934;
            break;

        case "MillasPorSegundo":
            MetrosPorSegundo = numeroInicial * 1609.34;
            KilometrosPorHora = numeroInicial * 5793.64;
            MillasPorHora = numeroInicial * 3600;
            Nudos = numeroInicial * 3238.84;
            PiesPorSegundo = numeroInicial * 5280;
            KilometrosPorSegundo = numeroInicial / 3600;
            MillasPorSegundo = numeroInicial / 1.60934;
            break;
    }

    // Asigna los resultados a los campos respectivos
    document.getElementById("MetrosPorSegundo").value = MetrosPorSegundo.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("KilometrosPorHora").value = KilometrosPorHora.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("MillasPorHora").value = MillasPorHora.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("Nudos").value = Nudos.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("PiesPorSegundo").value = PiesPorSegundo.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("KilometrosPorSegundo").value = KilometrosPorSegundo.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });
    document.getElementById("MillasPorSegundo").value = MillasPorSegundo.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10, useGrouping: true });

    document.getElementById("num").value = numeroInicial;
    document.getElementById("unidad").value = select1;
}

