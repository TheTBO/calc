export default class Calaculate {
    constructor() {
        this.operations = ['+', '-', '/', '*'];
        this.currentOperation = '';
        this.firstArgument = null;
    }

    calc(state, button) {
        if (button === 'ac') {
            this.currentOperation = '';
            this.firstArgument = null;
            return ({
                prev: 0,
                value: 0,
            });
        } else if (this.operations.includes(button)) {
            this.currentOperation = button;
            this.firstArgument = state.value;
            return ({
                prev: state.value,
                value: 0,
            });
        } else if (button === '=') {
            let value;
            switch (this.currentOperation) {
                case '+':
                    value = this.firstArgument + state.value;
                    this.currentOperation = '';
                    this.firstArgument = null;
                    return ({
                        prev: state.value,
                        value: value,
                    });
                case '-':
                    value = this.firstArgument - state.value;
                    this.currentOperation = '';
                    this.firstArgument = null;
                    return ({
                        prev: state.value,
                        value: value,
                    });
                case '*':
                    value = this.firstArgument * state.value;
                    this.currentOperation = '';
                    this.firstArgument = null;
                    return ({
                        prev: state.value,
                        value: value,
                    });
                case '/':
                    value = this.firstArgument / state.value;
                    this.currentOperation = '';
                    this.firstArgument = null;
                    return ({
                        prev: state.value,
                        value: value,
                    });
                default:
                    break;
            }
        } else {
            return ({
                prev: state.value,
                value: state.value * 10 + button,
            });
        }
    }
}