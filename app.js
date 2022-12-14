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

const correctAnswer = ['A', 'B', 'B', 'A']
let score = 0

const showPopupInfo = message => {
	popup.style.display = 'block'
	h3Score.textContent = message	
}

const calculatePoints = (userAnswer, index) => {
	const isACorrectAnswer = userAnswer === correctAnswer[index]

	if (isACorrectAnswer) {
		score += 25
	}
}

const showFinalPointsInformation = () => {
	const isThereAnyPoints = score > 0

	if (isThereAnyPoints) {
		showPopupInfo(`Legal, Você marcou ${score} pontos! =)`)
		return
	}
	showPopupInfo('Poxa, não foi dessa vez =(')
}

const handleQuiz = event => {
	event.preventDefault()

	const userAnswers = [
		form.inputQuestion1.value,
		form.inputQuestion2.value,
		form.inputQuestion3.value,
		form.inputQuestion4.value
	]

	const isAEmptyAnswer = userAnswers.some(userAnswer => userAnswer === '')

	if (isAEmptyAnswer) {
		showPopupInfo(`Por favor, responda todas perguntas ;)`)
		return
	}

	score = 0
	userAnswers.forEach(calculatePoints)
	showFinalPointsInformation()
}

const closePopup = event => {
	const classNameClickedElement = event.target.classList[0]
	const classNameToClose = ['retry-button', 'popup-close']

	const shouldClosePopup = classNameToClose.some(classname => 
		classname === classNameClickedElement)

	if (shouldClosePopup) {
		popup.style.display = 'none'
	}
}

form.addEventListener('submit', handleQuiz)
popup.addEventListener('click', closePopup)