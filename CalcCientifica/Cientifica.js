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

  //FUNCION DE CARGAR DATOS EN LA BARRA
  function insertText(value) {
      document.getElementById('pantalla').value += value;
  }

  // Función para realizar el cálculo
  function calculate() {
      try {
          let expression = document.getElementById('pantalla').value;
          
          // Reemplaza las funciones especiales
          expression = expression.replace('^2', '**2');
          expression = expression.replace('^3', '**3');
          expression = expression.replace('2√(', 'Math.sqrt(');
          expression = expression.replace('3√(', 'Math.cbrt(');
          expression = expression.replace('log(', 'Math.log10(');
          expression = expression.replace(/\^/g, '**');
          expression = expression.replace('sin(', 'Math.sin(');
          expression = expression.replace('cos(', 'Math.cos(');
          expression = expression.replace('tan(', 'Math.tan(');
          expression = expression.replace(/π/g, 'Math.PI');
          expression = expression.replace('EXP(', 'Math.exp(');

          
      // Evalúa la expresión matemática y muestra el resultado
      let result = eval(expression);

      // Actualiza el valor de Ans después de cada cálculo exitoso
      Ans = result;

      // Agrega el cálculo al historial
      addToHistory(expression, result);

      // Muestra el resultado en la pantalla
      document.getElementById('pantalla').value = result;

      } catch (error) {
          // Maneja los errores de la expresión matemática
          document.getElementById('pantalla').value = 'Error';
          console.error(error);
      }
  }
  let Ans = 0;  // Variable global para almacenar el resultado de la última operación

  function insertAns() {
      // Inserta el valor de Ans en la pantalla
      document.getElementById('pantalla').value += Ans;
  }

  function deleteLastChar() {
      var display = document.getElementById('pantalla');
      display.value = display.value.slice(0, -1);
  }

  function clearDisplay() {
      document.getElementById('pantalla').value = '';
  }

  //FUNCION PARA EL HISTORIAL

  function addToHistory(expresion, resultado) {
      const historyList = document.getElementById('historial-list');
      const historyItem = document.createElement('li');

       // Reemplaza las funciones especiales
        expresion = expresion.replace('**2', '^2');
        expresion = expresion.replace('**3', '^3');
        expresion = expresion.replace('Math.sqrt(', '2√(');
        expresion = expresion.replace('Math.cbrt(', '3√(');
        expresion = expresion.replace('Math.log10(', 'log(');
        expresion = expresion.replace(/\*\*/g, '^');
        expresion = expresion.replace('Math.sin(', 'sin(');
        expresion = expresion.replace('Math.cos(', 'cos(');
        expresion = expresion.replace('Math.tan(', 'tan(');
        expresion = expresion.replace('Math.PI', 'π');
        expresion = expresion.replace('Math.exp(', 'EXP(');


      // Asigna una clase al elemento li
      historyItem.classList.add('historial-item');
      historyItem.textContent = `${expresion} = ${resultado}`;
      historyList.appendChild(historyItem);

      // Modifica la siguiente línea para cambiar el estilo del historial-list
      historyList.style.display = 'block';
  }
