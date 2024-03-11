'use strict';

const startBtn = document.querySelector('.start-btn');
const title = document.querySelector('.title');

let counter = 0;



const init = function () {
	startBtn.addEventListener('click', () => {
		[title, startBtn].forEach((el) => el.classList.add('hidden'));
        counter ++;
        generateQuestionView(counter);
	});
};
init();
