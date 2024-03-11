const answersBox = document.querySelector('.answers')

class QuestionView {
    _parentElement = document.querySelector('.container')

    render() {
        const markup = this.generateMarkup();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    generateMarkup() {
        return `
        <div class="game-board">
            <p class="question-number">Question nr 1</p>
            <p class="question">What is the result of 2 * 4 ?</p>
            <div class="answers">
                <div class="answer" data-type="A">2</div>
                <div class="answer" data-type="B">8</div>
                <div class="answer" data-type="C">10</div>
                <div class="answer" data-type="D">12</div>
            </div>
            <button class="btn next-question hidden">Next</button>
        </div>
        `
    }
}

export default new QuestionView()