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

var msgPerdeu = document.querySelector(".msg__perdeu");
var msgGanhou = document.querySelector(".msg__ganhou");

var forca = document.querySelectorAll(".jogo__forca-forca");

function limpaForca(){
	ficaInvisivel(cabeca);
	ficaInvisivel(corpo);
	ficaInvisivel(bracoD);
	ficaInvisivel(bracoE);
	ficaInvisivel(pernaD);
	ficaInvisivel(pernaE);
}

function mudarForca(){
	if(erros == 0){
		limpaForca();
		tiraInvisivel(base);
	}

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
		colocaPerdeu();


	}


}


function tiraTeclado(){
	letrasBox.forEach(function(item){
	ficaInvisivel(item);
				});

}

function colocaTeclado(){
	letrasBox.forEach(function(item){
		tiraInvisivel(item);
	});
}

function colocaPerdeu(){
	tiraTeclado();
	tiraInvisivel(msgPerdeu);
}

function colocaGanhou(){
	tiraTeclado();
	tiraInvisivel(msgGanhou);
}

function tiraMensagem(){
	ficaInvisivel(msgPerdeu);
	ficaInvisivel(msgGanhou);
}