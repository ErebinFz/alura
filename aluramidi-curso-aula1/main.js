function tocaSom(idElementoAudio) {
	document.querySelector(idElementoAudio).play();
}

document.querySelectorAll('.tecla')

const ListaDeTeclas = querySelectorAll('.tecla')

let contador = 0;

while (contador < ListaDeTeclas.length) {

	const tecla - ListaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`;

	console.log(idAudio)

	tecla.onclick = function () {
		tocaSom(idAudio);
	}
}