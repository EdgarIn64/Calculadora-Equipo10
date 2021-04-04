      var randomNumber = Math.floor(Math.random() * 100) + 1;
      const adivinanzas = document.querySelector('.adivinanzas');
      const ultimoResultado = document.querySelector('.ultimoResultado');
      const bajoOAlto = document.querySelector('.bajoOAlto');
      const adivinaSubmit = document.querySelector('.adivinaSubmit');
      const campoAdivina = document.querySelector('.campoAdivina');
      var contadorAdivinanzas = 1;
      var resetButton;
      var cambiar = 1;

      function checaAdivinanza(num) {
        var AdivinanzaUsuario = Number(num.value);
        if (contadorAdivinanzas ==1) {
          adivinanzas.textContent = 'Adivinanzas Previas: ';
        }
        adivinanzas.style.backgroundColor = "#DED0FF";
        adivinanzas.style.fontSize = "1.2rem";
        adivinanzas.style.padding = "8px";
        adivinanzas.textContent += AdivinanzaUsuario + ' ';

        if (AdivinanzaUsuario == randomNumber) {
          limpiar();
          ultimoResultado.textContent = 'Felicidades! Estás en lo correcto!';
          ultimoResultado.style.backgroundColor = 'green';
          ultimoResultado.style.fontSize = "2rem";
          bajoOAlto.textContent = '';
          empezarJuego();
        } else if (contadorAdivinanzas == 10) {
          limpiar(); 
          ultimoResultado.textContent = '!!!GAME OVER!!!';
          bajoOAlto.textContent = '';
          ultimoResultado.style.backgroundColor = "#ff2020";
          ultimoResultado.style.fontSize = "2rem"; 
          empezarJuego();
        } else {
          ultimoResultado.textContent = 'Error!';
          ultimoResultado.style.backgroundColor = '#EE4010';
          ultimoResultado.style.fontSize = "1.25rem";
          if(AdivinanzaUsuario < randomNumber) {
            bajoOAlto.textContent = 'El último número es demasiado bajo!';
            limpiar();
            imagen('../img/tooDown.jpg');
          } else if(AdivinanzaUsuario > randomNumber) {
            bajoOAlto.textContent = 'El último númer es demasiado alto!';
          	limpiar();
          	imagen('../img/tooUp.jpg');
          }
        }
        ultimoResultado.style.textAlign = "center";
        ultimoResultado.padding = "10px";
        if(cambiar==1){
        	cambiar--;
        	bajoOAlto.style.backgroundColor = "#FF90DD";	
        }
        else{
        	cambiar++;
        	bajoOAlto.style.backgroundColor = "#FFDD90";	
        }
        bajoOAlto.style.fontSize = "1.2rem";
        bajoOAlto.style.padding = "5px";
        contadorAdivinanzas++;
        campoAdivina.value = '';
        campoAdivina.focus();
      }

      function imagen(url){
      	var x = document.createElement("IMG");
   	    x.setAttribute("src", url);
		x.setAttribute("width", "254");
		x.setAttribute("height", "188");
		x.style.textAlign = 'center';
		x.id = "imagen";
		document.body.appendChild(x);
      }

      function limpiar(){
	    lista=document.querySelectorAll("#imagen");
	    if(lista.length!=0){
	        i=lista.length-1;
	        lista[i].parentNode.removeChild(lista[i--]);
	    }
	  }

      adivinaSubmit.addEventListener('click', checaAdivinanza);

      function empezarJuego() {
        campoAdivina.disabled = true;
        adivinaSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Iniciar nuevo Juego';
        document.body.appendChild(resetButton);
        resetButton.style.backgroundColor = "#7040ff";
        resetButton.style.color = "white";
        resetButton.style.fontSize = "1rem";
        resetButton.style.height = "40px";
        
        resetButton.addEventListener('click', resetJuego);
      }

      function resetJuego() {
        contadorAdivinanzas = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(var i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        campoAdivina.disabled = false;
        adivinaSubmit.disabled = false;
        campoAdivina.value = '';
        campoAdivina.focus();
        ultimoResultado.style.backgroundColor = 'rgb(147, 164, 238)';
        adivinanzas.style.backgroundColor = 'rgb(147, 164, 238)';
		    bajoOAlto.style.backgroundColor = 'rgb(147, 164, 238)';        
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }