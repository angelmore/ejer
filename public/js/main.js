/*
window.onload = function(){
	alert('Hola Mundo');
};
*/
window.onmousemove = function(){

	var numero = Math.floor((Math.random() * 10) + 1);

	var resultado = 1;
 	
	for(var i=1; i<=numero; i++) {
 		resultado *= i;
	}
	console.log('El factorial de ' + numero + ' es ' + resultado);
}
/*
var meses = ['Enero', 'Febrero', 'Marzo'];

var mesNumToText = function(mes){
	if (mes == 'Enero') {return 1;}
	if (mes == 'Febrero') {return 2;}
	if (mes == 'Marzo') {return 3;}
}

window.onload = function(){

	var i = Math.floor((Math.random() * 3) + 0);
	alert('Mes ' + meses[i] + ' en num es ' + mesNumToText(meses[i]));
}
*/