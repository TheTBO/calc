import React from 'react';
import Button from './button';

export default class Keypad extends React.Component {
    constructor(props) {
        super(props);
        this.layout = ['ac', '+', '-', '/',
            1, 2, 3, '*',
            4, 5, 6, '=',
            7, 8, 9, 0
        ];
        this.buttons = []
        this.layout.forEach((value) => {
            this.buttons.push(
                <Button key={value} id={value} clickHandler={this.props.eventHandler} />
            );
        });
    }
    render() {
        return (
            <div className='keypad grid grid-cols-4 gap-x-1 gap-y-1'>
                {this.buttons}
            </div>
        );
    }
}
