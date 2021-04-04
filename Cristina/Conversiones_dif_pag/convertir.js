function binario(numero){
prueba=parseInt(numero);
	 parrafo = document.createElement("p");
	contenido = document.createTextNode("El número "+numero+" en binario es "+prueba.toString("2"));
	parrafo.appendChild(contenido);
	document.body.appendChild(parrafo);
	document.getElementById("num").value="";
}

function hexadecimal(numero){
aux=parseInt(numero);
	parrafo = document.createElement("p");
	contenido = document.createTextNode("El número "+numero+" en hexadecimal es "+aux.toString("16"));
	parrafo.appendChild(contenido);
	document.body.appendChild(parrafo);
	document.getElementById("num").value="";
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
