function ficaInvisivel(elemento){
	elemento.classList.add("invisivel");
}

function tiraInvisivel(elemento){
	elemento.classList.remove("invisivel");
}

function numeroAleatorio(numero){
	var a = Math.floor(Math.random()*numero);
	return a;
}

function sortearPalavra(){
	//limpa palavra atual
	divPalavraSecreta.innerHTML="";

	var tamanhoLista = palavrasJogo.length;
	var na = numeroAleatorio(tamanhoLista);
	var paIn = palavrasJogo[na];

	//adicionando as letras da palavra secreta
	for(i=0; i<paIn.length; i++){
		var a = document.createElement("div");
		var letra = paIn[i];
		a.textContent = letra.toUpperCase();
		a.classList.add("jogo__forca-letras");
		divPalavraSecreta.appendChild(a);
	}

	//remove palavra que foi sorteada
	palavrasJogo.splice(palavrasJogo.indexOf(paIn),1);
}
