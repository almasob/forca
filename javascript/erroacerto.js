var erros = 0;
var acertos = 0;

var base = document.querySelector(".forca-base");
var cabeca = document.querySelector(".forca-cabeca");
var corpo = document.querySelector(".forca-corpo");
var bracoD = document.querySelector(".forca-bracoD");
var bracoE = document.querySelector(".forca-bracoE");
var pernaD = document.querySelector(".forca-pernaD");
var pernaE = document.querySelector(".forca-pernaE");

var teclado = document.querySelector(".jogo__letras");


function mudarForca(){
	if(erros == 1){
		ficaInvisivel(base);
		tiraInvisivel(cabeca);
	}
	if(erros == 2){
		ficaInvisivel(cabeca);
		tiraInvisivel(corpo);
	}
	if(erros == 3){
		ficaInvisivel(corpo);
		tiraInvisivel(bracoD);
	}
	if(erros == 4){
		ficaInvisivel(bracoD);
		tiraInvisivel(bracoE);
	}
	if(erros == 5){
		ficaInvisivel(bracoE);
		tiraInvisivel(pernaD);
	}
	if(erros == 6){
		ficaInvisivel(pernaD);
		tiraInvisivel(pernaE);
		msgPerdeu();

	}


}


function msgPerdeu(){


}