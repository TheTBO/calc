import React from 'react';
import Keypad from './components/keypad';
import Display from './components/display';
import Calaculate from './logic/calc';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.calculate = new Calaculate();
        this.state = {
            value: 0,
            prev: 0,
        }
    }

    eventHandler = (id) => {
        this.setState(this.calculate.calc(this.state, id));
    }


    render() {
        return (
            <div className='container flex flex-col max-w-sm bg-yellow-50 p-4 rounded-xl shadow-xl w-max'>
                <span>Calcutron 3000</span>
                <Display value={this.state.value} />
                <Keypad eventHandler={this.eventHandler} />
            </div>
        );
    }
}
