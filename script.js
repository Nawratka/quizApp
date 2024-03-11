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
const endView = `<div class="end-board">
 					<p class="end-title">End of quiz!</p>
 					<p class="score">Your score: ${state.score} / ${state.questions}</p>
 					<button class="btn">Again</button>
				</div>`;

const renderEdgeViews = function (state) {
	_parentElement.insertAdjacentHTML('beforeend', state === 'start' ? startView : endView);
};

const initialState = function () {
	state.counter = state.score = 0;
	_parentElement.innerHTML = '';
	renderEdgeViews('start');
};

const controlStart = function () {
	const startBtn = document.getElementById('startBtn');
	startBtn.addEventListener('click', controlView);
};

const controlView = function () {
	const viewToDelete = _parentElement.firstElementChild;
	_parentElement.removeChild(viewToDelete);
	if (state.counter >= 0 && state.counter < state.questions + 1) {
		state.counter++;
		questionView.render();
		controlGame();
	} else summaryView();
};

const controlGame = function () {
	console.log(state.counter);
};

const init = function () {
	initialState();
	controlStart();
};
init();
