import questionView from './questionView.js';

const _parentElement = document.querySelector('.container');

export const state = {
	questions: 5,
	counter: 0,
	score: 0,
};

const startView = `<div class="start-board">
						<h1 class="title">Quiz Application</h1>
						<button class="btn" id="startBtn">start</button>
					</div>`;

const generateEndMarkup = function () {
	return `<div class="end-board">
				<p class="end-title">End of quiz!</p>
				<p class="score">Your score: ${state.score} / ${state.questions}</p>
				<button class="btn" id="againBtn">Again</button>
			</div>`;
};

const renderEdgeViews = function (partOfGame) {
	_parentElement.insertAdjacentHTML(
		'beforeend',
		partOfGame === 'start' ? startView : generateEndMarkup()
	);
};

const initialState = function () {
	state.counter = state.score = 0;
	_parentElement.innerHTML = '';
	renderEdgeViews('start');
};

const controlStart = function () {
	const startBtn = document.getElementById('startBtn');
	startBtn.addEventListener('click', (e) => {
		if (!e.target === startBtn) return;
		controlView();
	});
};

const controlView = function () {
	// CLEAR PREV VIEW FROM MAIN CONTAINER
	_parentElement.classList.remove('bad-bg');
	_parentElement.classList.remove('good-bg');
	const viewToDelete = _parentElement.firstElementChild;
	_parentElement.removeChild(viewToDelete);
	state.counter++;

	// DECISION: NEXT QUESTION || END
	if (state.counter >= 0 && state.counter < state.questions + 1) {
		questionView.render();
		questionView.answerHandle(checkAnswer);
	} else summaryView();
};

const checkAnswer = function (target, rightAnswer) {
	// CHECK
	const usersAnswer = target.innerText;
	const btn = document.querySelector('.btn');
	if (usersAnswer === rightAnswer) {
		state.score++;
		_parentElement.classList.add('good-bg');
	} else {
		_parentElement.classList.add('bad-bg');
	}

	// SHOW BTN
	btn.classList.remove('hidden');

	// GO NEXT BTN HANDLE
	btn.addEventListener('click', (e) => {
		if (!e.target === btn) return;
		controlView();
	});
};

const summaryView = function () {
	renderEdgeViews('end');
	const againBtn = document.getElementById("againBtn")
	againBtn.addEventListener('click', init)
};

const init = function () {
	initialState();
	controlStart();
};
init();
