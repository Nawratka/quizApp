import { state } from './script.js';
import { questionsArr } from './questions.js';

class QuestionView {
	_parentElement = document.querySelector('.container');

	render() {
		const currQuestionAnswers = questionsArr[state.counter - 1].answers;
		this.shuffleArray(currQuestionAnswers);
		const markup = this.generateMarkup(currQuestionAnswers);
		this._parentElement.insertAdjacentHTML('beforeend', markup);
	}

	shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	};

	generateMarkup(answers) {
		return `
        <div class="game-board">
            <p class="question-number">Question nr ${state.counter}</p>
            <p class="question">${questionsArr[state.counter - 1].question}</p>
            <div class="answers">
                <div class="answer" data-type="A">${answers[0]}</div>
                <div class="answer" data-type="B">${answers[1]}</div>
                <div class="answer" data-type="C">${answers[2]}</div>
                <div class="answer" data-type="D">${answers[3]}</div>
            </div>
            <button class="btn next-question hidden">Next</button>
        </div>
        `;
	}

	answerHandle(handler) {
		const answersBox = document.querySelector('.answers');

		answersBox.addEventListener('click', function clickHandle(e) {
			if (!e.target === e.target.classList.contains('answer')) return;
			handler(e.target, questionsArr[state.counter - 1].rightAnswer);
			answersBox.removeEventListener('click', clickHandle);
		});
	}
}

export default new QuestionView();
