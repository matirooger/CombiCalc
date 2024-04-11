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

 //CONVERSOR DE LONGITUD

 function calcularLongitud() {
    // Obtiene los valores de los campos
    var VInicial = document.getElementById("VInicial").value;
    var unidad1 = document.getElementById("unidad1").value;
    var unidad2 = document.getElementById("unidad2").value;
    var resultado;
    //lógica para realizar el cálculo

    switch (unidad1) {

        case "milimetros":// MILIMETROS
            switch (unidad2) {
                case "centimetros":
                    resultado = VInicial / 10;
                    break;
                case "decimetros":
                    resultado = VInicial / 100;
                    break;
                case "metros":
                    resultado = VInicial / 1000;
                    break;
                case "decametros":
                    resultado = VInicial / 10000;
                    break;
                case "hectometros":
                    resultado = VInicial / 100000;
                    break;
                case "kilometros":
                    resultado = VInicial / 1000000;
                    break;
                case "millas":
                    resultado = VInicial / 1609344;
                    break;
                case "pies":
                    resultado = VInicial / 304.8;
                    break;
                case "pulgadas":
                    resultado = VInicial / 25.4;
                    break;
                case "yardas":
                    resultado = VInicial / 914.4;
                    break;
                case "legua":
                    resultado = VInicial / 4828032;
                    break;
                case "nautica":
                    resultado = VInicial / 1852000;
                    break;
                default:
                    resultado = VInicial;
                    break;
            }
            break;

        case "centimetros"://CENTIMETROS
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 10;
                    break;
                case "decimetros":
                    resultado = VInicial / 10;
                    break;
                case "metros":
                    resultado = VInicial / 100;
                    break;
                case "decametros":
                    resultado = VInicial / 1000;
                    break;
                case "hectometros":
                    resultado = VInicial / 10000;
                    break;
                case "kilometros":
                    resultado = VInicial / 100000;
                    break;
                case "millas":
                    resultado = VInicial / 160934.4;
                    break;
                case "pies":
                    resultado = VInicial / 30.48;
                    break;
                case "pulgadas":
                    resultado = VInicial / 2.54;
                    break;
                case "yardas":
                    resultado = VInicial / 91.44;
                    break;
                case "legua":
                    resultado = VInicial / 482803.2;
                    break;
                case "nautica":
                    resultado = VInicial / 185200;
                    break;
                default:
                    resultado = VInicial; 
                    break;
            }
            break;

        case "decimetros"://DECIMETROS
            switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 100;
                        break;
                    case "centimetros":
                        resultado = VInicial * 10;
                        break;
                    case "metros":
                        resultado = VInicial / 10;
                        break;
                    case "decametros":
                        resultado = VInicial / 100;
                        break;
                    case "hectometros":
                        resultado = VInicial / 1000;
                        break;
                    case "kilometros":
                        resultado = VInicial / 10000;
                        break;
                    case "millas":
                        resultado = VInicial / 160934.4;
                        break;
                    case "pies":
                        resultado = VInicial / 3.048;
                        break;
                    case "pulgadas":
                        resultado = VInicial / 2.54;
                        break;
                    case "yardas":
                        resultado = VInicial / 9.144;
                        break;
                    case "legua":
                        resultado = VInicial / 48280.32;
                        break;
                    case "nautica":
                        resultado = VInicial / 18520;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                    }
                break;

        case "metros"://METROS
                switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 1000;
                        break;
                    case "centimetros":
                        resultado = VInicial * 100;
                        break;
                    case "decimetros":
                        resultado = VInicial * 10;
                        break;
                    case "decametros":
                        resultado = VInicial / 10;
                        break;
                    case "hectometros":
                        resultado = VInicial / 100;
                        break;
                    case "kilometros":
                        resultado = VInicial / 1000;
                        break;
                    case "millas":
                        resultado = VInicial / 1609.344;
                        break;
                    case "pies":
                        resultado = VInicial * 3.281;
                        break;
                    case "pulgadas":
                        resultado = VInicial * 39.37;
                        break;
                    case "yardas":
                        resultado = VInicial * 1.094;
                        break;
                    case "legua":
                        resultado = VInicial / 4828.032;
                        break;
                    case "nautica":
                        resultado = VInicial / 1852;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                }
                break;

        case "decametros"://DECAMETROS
                switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 10000;
                        break;
                    case "centimetros":
                        resultado = VInicial * 1000;
                        break;
                    case "decimetros":
                        resultado = VInicial * 100;
                        break;
                    case "metros":
                        resultado = VInicial * 10;
                        break;
                    case "hectometros":
                        resultado = VInicial / 10;
                        break;
                    case "kilometros":
                        resultado = VInicial / 100;
                        break;
                    case "millas":
                        resultado = VInicial / 160934.4;
                        break;
                    case "pies":
                        resultado = VInicial * 32.808;
                        break;
                    case "pulgadas":
                        resultado = VInicial * 393.701;
                        break;
                    case "yardas":
                        resultado = VInicial * 10.936;
                        break;
                    case "legua":
                        resultado = VInicial / 4828.032;
                        break;
                    case "nautica":
                        resultado = VInicial / 1852;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                }
                break;

        case "hectometros"://HECTOMETROS
                switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 100000;
                        break;
                    case "centimetros":
                        resultado = VInicial * 10000;
                        break;
                    case "decimetros":
                        resultado = VInicial * 1000;
                        break;
                    case "metros":
                        resultado = VInicial * 100;
                        break;
                    case "decametros":
                        resultado = VInicial * 10;
                        break;
                    case "kilometros":
                        resultado = VInicial / 10;
                        break;
                    case "millas":
                        resultado = VInicial / 160934.4;
                        break;
                    case "pies":
                        resultado = VInicial * 328.084;
                        break;
                    case "pulgadas":
                        resultado = VInicial * 3937.008;
                        break;
                    case "yardas":
                        resultado = VInicial * 109.361;
                        break;
                    case "legua":
                        resultado = VInicial / 482.803;
                        break;
                    case "nautica":
                        resultado = VInicial / 185.2;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                }
                break;

        case "kilometros"://KILOMETROS
                switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 1000000;
                        break;
                    case "centimetros":
                        resultado = VInicial * 100000;
                        break;
                    case "decimetros":
                        resultado = VInicial * 10000;
                        break;
                    case "metros":
                        resultado = VInicial * 1000;
                        break;
                    case "decametros":
                        resultado = VInicial * 100;
                        break;
                    case "hectometros":
                        resultado = VInicial * 10;
                        break;
                    case "millas":
                        resultado = VInicial / 1.60934;
                        break;
                    case "pies":
                        resultado = VInicial * 3280.84;
                        break;
                    case "pulgadas":
                        resultado = VInicial * 39370.1;
                        break;
                    case "yardas":
                        resultado = VInicial * 1093.61;
                        break;
                    case "legua":
                        resultado = VInicial / 4.82803;
                        break;
                    case "nautica":
                        resultado = VInicial / 1.852;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                }
                break;

        case "millas"://MILLAS
                switch (unidad2) {
                    case "milimetros":
                        resultado = VInicial * 1609344;
                        break;
                    case "centimetros":
                        resultado = VInicial * 160934.4;
                        break;
                    case "decimetros":
                        resultado = VInicial * 16093.44;
                        break;
                    case "metros":
                        resultado = VInicial * 1609.34;
                        break;
                    case "decametros":
                        resultado = VInicial * 160.934;
                        break;
                    case "hectometros":
                        resultado = VInicial * 16.0934;
                        break;
                    case "kilometros":
                        resultado = VInicial * 1.60934;
                        break;
                    case "pies":
                        resultado = VInicial * 5280;
                        break;
                    case "pulgadas":
                        resultado = VInicial * 63360;
                        break;
                    case "yardas":
                        resultado = VInicial * 1760;
                        break;
                    case "legua":
                        resultado = VInicial / 3;
                        break;
                    case "nautica":
                        resultado = VInicial / 1.15078;
                        break;
                    default:
                        resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                        break;
                }
                break;

        case "pies"://PIES
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 304.8;
                    break;
                case "centimetros":
                    resultado = VInicial * 30.48;
                    break;
                case "decimetros":
                    resultado = VInicial * 3.048;
                    break;
                case "metros":
                    resultado = VInicial * 0.3048;
                    break;
                case "decametros":
                    resultado = VInicial * 0.03048;
                    break;
                case "hectometros":
                    resultado = VInicial * 0.003048;
                    break;
                case "kilometros":
                    resultado = VInicial * 0.0003048;
                    break;
                case "millas":
                    resultado = VInicial / 5280;
                    break;
                case "pulgadas":
                    resultado = VInicial * 12;
                    break;
                case "yardas":
                    resultado = VInicial / 3;
                    break;
                case "legua":
                    resultado = VInicial / 15840;
                    break;
                case "nautica":
                    resultado = VInicial / 6076.12;
                    break;
                default:
                    resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                    break;
            }
            break;

        case "pulgadas"://PULGADAS
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 25.4;
                    break;
                case "centimetros":
                    resultado = VInicial * 2.54;
                    break;
                case "decimetros":
                    resultado = VInicial * 0.254;
                    break;
                case "metros":
                    resultado = VInicial * 0.0254;
                    break;
                case "decametros":
                    resultado = VInicial * 0.00254;
                    break;
                case "hectometros":
                    resultado = VInicial * 0.000254;
                    break;
                case "kilometros":
                    resultado = VInicial * 0.0000254;
                    break;
                case "millas":
                    resultado = VInicial / 63360;
                    break;
                case "pies":
                    resultado = VInicial / 12;
                    break;
                case "yardas":
                    resultado = VInicial / 36;
                    break;
                case "legua":
                    resultado = VInicial / 190080;
                    break;
                case "nautica":
                    resultado = VInicial / 72913.4;
                    break;
                default:
                    resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                    break;
            }
            break;

        case "yardas"://YARDAS
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 914.4;
                    break;
                case "centimetros":
                    resultado = VInicial * 91.44;
                    break;
                case "decimetros":
                    resultado = VInicial * 9.144;
                    break;
                case "metros":
                    resultado = VInicial * 0.9144;
                    break;
                case "decametros":
                    resultado = VInicial * 0.09144;
                    break;
                case "hectometros":
                    resultado = VInicial * 0.009144;
                    break;
                case "kilometros":
                    resultado = VInicial * 0.0009144;
                    break;
                case "millas":
                    resultado = VInicial / 1760;
                    break;
                case "pies":
                    resultado = VInicial * 3;
                    break;
                case "pulgadas":
                    resultado = VInicial * 36;
                    break;
                case "legua":
                    resultado = VInicial / 5280;
                    break;
                case "nautica":
                    resultado = VInicial / 2025.37;
                    break;
                default:
                    resultado = VInicial; // Si la unidad2 es la misma que la unidad1
                    break;
            }
            break;

        case "legua"://LEGUA
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 4828032;
                    break;
                case "centimetros":
                    resultado = VInicial * 482803.2;
                    break;
                case "decimetros":
                    resultado = VInicial * 48280.32;
                    break;
                case "metros":
                    resultado = VInicial * 4828.03;
                    break;
                case "decametros":
                    resultado = VInicial * 482.803;
                    break;
                case "hectometros":
                    resultado = VInicial * 48.2803;
                    break;
                case "kilometros":
                    resultado = VInicial * 4.82803;
                    break;
                case "millas":
                    resultado = VInicial / 3;
                    break;
                case "pies":
                    resultado = VInicial * 15840;
                    break;
                case "pulgadas":
                    resultado = VInicial * 190080;
                    break;
                case "yardas":
                    resultado = VInicial * 1760;
                    break;
                case "nautica":
                    resultado = VInicial / 1.852;
                    break;
                default:
                    resultado = VInicial; 
                    break;
            }
            break;

        case "nautica"://NAUTICA
            switch (unidad2) {
                case "milimetros":
                    resultado = VInicial * 1852000;
                    break;
                case "centimetros":
                    resultado = VInicial * 185200;
                    break;
                case "decimetros":
                    resultado = VInicial * 18520;
                    break;
                case "metros":
                    resultado = VInicial * 1852;
                    break;
                case "decametros":
                    resultado = VInicial * 185.2;
                    break;
                case "hectometros":
                    resultado = VInicial * 18.52;
                    break;
                case "kilometros":
                    resultado = VInicial * 1.852;
                    break;
                case "millas":
                    resultado = VInicial / 1.15078;
                    break;
                case "pies":
                    resultado = VInicial * 6076.12;
                    break;
                case "pulgadas":
                    resultado = VInicial * 72913.4;
                    break;
                case "yardas":
                    resultado = VInicial * 2025.37;
                    break;
                case "legua":
                    resultado = VInicial * 1.852;
                    break;
                default:
                    resultado = VInicial; 
                    break;
            }
            break;

    default:
            resultado = VInicial;
            break;
    }

    // Muestra el resultado en el campo de resultado
    document.getElementById("Resultado").value = resultado;
}

function llenarTabla(){
    var VInicial = document.getElementById("VInicial").value;
    var unidad1 = document.getElementById("unidad1").value;
    var mm; //Milimetros
    var cm; //Centimetros
    var dc; //Decimetros
    var m; //Metros
    var dm; //Decametros
    var hm; //Hectometros
    var km; //Kilometros
    var ml; //Millas
    var P; //Pies
    var pl; //Pulgadas
    var Y; //Yardas
    var L; //Leguas
    var N; //Nautica

    switch(unidad1){

        case "milimetros":
            mm = VInicial;
            cm = VInicial / 10;
            dc = VInicial / 100;
            m = VInicial / 1000;
            dm = VInicial / 10000;
            hm = VInicial / 100000;
            km = VInicial / 1000000;
            ml = VInicial / 1609000;
            P = VInicial / 304.8;
            pl = VInicial / 25.4;
            Y = VInicial / 914.4;
            L = VInicial / 4828000;
            N = VInicial / 1852000;
            break;

        case "centimetros":
            cm = VInicial;
            mm = VInicial * 10;
            dc = VInicial / 10;
            m = VInicial / 100;
            dm = VInicial / 1000;
            hm = VInicial / 10000;
            km = VInicial / 100000;
            ml = VInicial / 160934.4;
            P = VInicial / 30.48;
            pl = VInicial / 2.54;
            Y = VInicial / 91.44;
            L = VInicial / 482803.2;
            N = VInicial / 185200;
            break;
        
        case "decimetros":
            dc = VInicial;
            mm = VInicial * 100;
            cm = VInicial * 10;
            m = VInicial / 10;
            dm = VInicial / 100;
            hm = VInicial / 1000;
            km = VInicial / 10000;
            ml = VInicial / 160934.4;
            P = VInicial / 3.048;
            pl = VInicial / 0.254;
            Y = VInicial / 91.44;
            L = VInicial / 48280.32;
            N = VInicial / 18520;
            break;

        case "metros":
            m = VInicial;
            mm = VInicial * 1000;
            cm = VInicial * 100;
            dc = VInicial * 10;
            dm = VInicial / 10;
            hm = VInicial / 100;
            km = VInicial / 1000;
            ml = VInicial / 160934.4;
            P = VInicial / 0.3048;
            pl = VInicial / 0.0254;
            Y = VInicial / 0.9144;
            L = VInicial / 4828.032;
            N = VInicial / 1852;
            break;

        case "decametros":
            hm = VInicial;
            mm = VInicial * 10000;
            cm = VInicial * 1000;
            dc = VInicial * 100;
            dm = VInicial * 10;
            m = VInicial * 10;
            km = VInicial / 100;
            ml = VInicial / 160934.4;
            P = VInicial / 30.48;
            pl = VInicial / 2.54;
            Y = VInicial / 9.144;
            L = VInicial / 48280.32;
            N = VInicial / 18520;
            break;

        case "hectometros":
            hm = VInicial;
            mm = VInicial * 100000;
            cm = VInicial * 10000;
            dc = VInicial * 1000;
            m = VInicial * 100;
            dm = VInicial * 10;
            km = VInicial / 10;
            ml = VInicial / 1609.344;
            P = VInicial / 0.03048;
            pl = VInicial / 0.00254;
            Y = VInicial / 0.9144;
            L = VInicial / 482.8032;
            N = VInicial / 185.2;
            break;

        case "kilometros":
            km = VInicial;
            mm = VInicial * 1000000;
            cm = VInicial * 100000;
            dc = VInicial * 10000;
            m = VInicial * 1000;
            dm = VInicial * 100;
            hm = VInicial * 10;
            ml = VInicial / 1.609344;
            P = VInicial / 0.0003048;
            pl = VInicial / 0.0000254;
            Y = VInicial / 0.0009144;
            L = VInicial / 48.28032;
            N = VInicial / 18.52;
            break;

        case "millas":
            ml = VInicial;
            mm = VInicial * 1609344;
            cm = VInicial * 160934.4;
            dc = VInicial * 16093.44;
            m = VInicial * 1609.344;
            dm = VInicial * 160.9344;
            hm = VInicial * 16.09344;
            km = VInicial * 1.609344;
            P = VInicial / 0.00018939;
            pl = VInicial / 0.000015783;
            Y = VInicial / 0.00056818;
            L = VInicial / 0.29813688;
            N = VInicial / 0.11507935;
            break;

        case "pies":
            P = VInicial;
            mm = VInicial * 304.8;
            cm = VInicial * 30.48;
            dc = VInicial * 3.048;
            m = VInicial * 0.3048;
            dm = VInicial * 0.03048;
            hm = VInicial * 0.003048;
            km = VInicial * 0.0003048;
            ml = VInicial * 0.00018939;
            pl = VInicial / 12;
            Y = VInicial / 3;
            L = VInicial / 6076.1155;
            N = VInicial / 1852;
            break;

        case "pulgadas":
            pl = VInicial;
            mm = VInicial * 25.4;
            cm = VInicial * 2.54;
            dc = VInicial * 0.254;
            m = VInicial * 0.0254;
            dm = VInicial * 0.00254;
            hm = VInicial * 0.000254;
            km = VInicial * 0.0000254;
            ml = VInicial / 63360;
            P = VInicial * 0.0833333;
            Y = VInicial / 36;
            L = VInicial / 190080;
            N = VInicial / 1852000;
            break;

        case "yardas":
            Y = VInicial;
            mm = VInicial * 914.4;
            cm = VInicial * 91.44;
            dc = VInicial * 9.144;
            m = VInicial * 0.9144;
            dm = VInicial * 0.09144;
            hm = VInicial * 0.009144;
            km = VInicial * 0.0009144;
            ml = VInicial / 1760;
            P = VInicial * 3;
            pl = VInicial * 36;
            L = VInicial / 2025.3718;
            N = VInicial / 1852;
            break;

        case "legua":
            L = VInicial;
            mm = VInicial * 4828032;
            cm = VInicial * 482803.2;
            dc = VInicial * 48280.32;
            m = VInicial * 4828.032;
            dm = VInicial * 482.8032;
            hm = VInicial * 48.28032;
            km = VInicial * 4.828032;
            ml = VInicial * 3;
            P = VInicial * 15840;
            pl = VInicial * 190080;
            Y = VInicial * 2025.3718;
            N = VInicial / 0.5399568;
            break;

        case "nautica":
            N = VInicial;
            mm = VInicial * 1852000;
            cm = VInicial * 185200;
            dc = VInicial * 18520;
            m = VInicial * 1852;
            dm = VInicial * 185.2;
            hm = VInicial * 18.52;
            km = VInicial * 1.852;
            ml = VInicial / 1.15078;
            P = VInicial * 6076.1155;
            pl = VInicial * 72913.386;
            Y = VInicial * 2025.3718;
            L = VInicial * 0.5399568;
            break;  
    }

    // Asigna los resultados a los campos respectivos
    document.getElementById("milimetros").value = mm;
    document.getElementById("centimetros").value = cm;
    document.getElementById("decimetros").value = dc;
    document.getElementById("metros").value = m;
    document.getElementById("decametros").value = dm;
    document.getElementById("hectometros").value = hm;
    document.getElementById("kilometros").value = km;
    document.getElementById("millas").value = ml.toFixed(10);
    document.getElementById("pies").value = P;
    document.getElementById("pulgadas").value = pl;
    document.getElementById("yardas").value = Y;
    document.getElementById("legua").value = L.toFixed(10);
    document.getElementById("nautica").value = N.toFixed(10);


    document.getElementById("num").value = VInicial;
    document.getElementById("unidad").value = unidad1;


}

