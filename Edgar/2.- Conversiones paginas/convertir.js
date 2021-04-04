
function binario(numero){
	var resultado = "";
	var aux = numero;
	while (aux > 0){
		resultado = resultado + parseInt(aux%2);
		aux = parseInt(aux/2);
	}
	resultado = revertir(resultado);
	imprimir("binario", numero, resultado);
}

function hexadecimal(numero){
	var aux = numero;
	var resultado = "";
	var residuo = 0;
	while (aux > 0){
		residuo = parseInt(aux%16);
		if(residuo>9)
			residuo = abc(residuo);
		resultado = resultado + residuo;
		aux = parseInt(aux/16);
	}
	resultado = revertir(resultado);
	imprimir("hexadecimal", numero, resultado);
}

function limpiar(){
	lista=document.querySelectorAll('p');

	if(lista.length!=0){
		i=lista.length-1;
		while(i>-1)
			lista[i].parentNode.removeChild(lista[i--]);
	}
	else alert("No hay párrafos a eliminar");
}

function abc(residuo){
	switch (residuo){
		case 10: return "A";
		break;
		case 11: return "B";
		break;
		case 12: return "C";
		break;
		case 13: return "D";
		break;
		case 14: return "E";
		break;
		case 15: return "F";
		break;
	}
}

function revertir(resultado){
	var aux = "";
	var i=resultado.length-1;
	while(i>=0){
		aux = aux + resultado[i];
		i--;
	}
	return aux;
}

function imprimir(sistema, numero, resultado){
	parrafo = document.createElement("p");
	contenido = document.createTextNode("El número "+numero+" en " + sistema + " es "+ resultado);
	parrafo.appendChild(contenido);
	document.body.appendChild(parrafo);
	document.getElementById("num").value="";
}


function abrir_binario(){
	window.open('binario.html','','toolbar=no, status=no, resizable');
}

function abrir_hexa(){
	window.open('hexa.html','','toolbar=no, status=no, resizable');	
}

function cierra(){
	if (confirm("¿Quieres cerrar la ventana?")){
		window.close();
	}
}
