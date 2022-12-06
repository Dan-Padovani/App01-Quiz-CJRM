/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const h3Score = document.querySelector('.popup-content h3')
const popupButton = document.querySelector('.retry-button')


const correctAnswer = ['A', 'B', 'B', 'A']

form.addEventListener('submit', event => {
	event.preventDefault()

	const userAnswers = [
		form.inputQuestion1.value,
		form.inputQuestion2.value,
		form.inputQuestion3.value,
		form.inputQuestion4.value
	]

	for (let i = 0; i < userAnswers.length; i++) {
		if (userAnswers[i] === '') {
			popup.style.display = 'block'
			h3Score.textContent = `Por favor responda todas perguntas ;)`
			popupButton.textContent = 'Continuar'
			return
		}
	}

	let score = 0
	userAnswers.forEach((userAnswer, index) => {
		if (userAnswer === correctAnswer[index]) {
			score += 25
		}
	})
	
	if (score > 0) {
		popup.style.display = 'block'
		h3Score.textContent = `Você marcou ${score} pontos! =)`
		popupButton.textContent = 'Tente Novamente'
		return
	}
	popup.style.display = 'block'
	h3Score.textContent = 'Poxa, não foi dessa vez =('
	popupButton.textContent = 'Tente Novamente'
})

popup.addEventListener('click', event => {
	const classNameClickedElement = event.target.classList[0]
	const classNameToClose = ['retry-button', 'popup-close']

	const closePopup = classNameToClose.some(classname => 
		classname === classNameClickedElement)

	if (closePopup) {
		popup.style.display = 'none'
	}
})


