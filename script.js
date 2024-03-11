import questionView from './questionView.js';

const _parentElement = document.querySelector('.container');

const state = {
	questions: 5,
	counter: 0,
	score: 0,
};

const initialState = function () {
	_parentElement.insertAdjacentHTML(
		'beforeend',
		`<div class="start-board">
			<h1 class="title">Quiz Application</h1>
			<button class="btn" id="startBtn">start</button>
		</div>`
	);
};

const summaryView = function () {
	_parentElement.insertAdjacentHTML(
		'beforeend',
		`<div class="end-board">
			<p class="end-title">End of quiz!</p>
			<p class="score">Your score: 5 / 5</p>
			<button class="btn">Again</button>
		</div>`
	);
};

const controlStart = function () {
	const startBtn = document.getElementById('startBtn');
	startBtn.addEventListener('click', controlGame);
};

const controlGame = function () {
	const viewToDelete = _parentElement.firstElementChild;
	_parentElement.removeChild(viewToDelete);
	if (state.counter >= 0 && state.counter < state.questions + 1) {
		state.counter++;
		questionView.render();
	} else summaryView();
};

const init = function () {
	initialState();
	controlStart();
};

init();
