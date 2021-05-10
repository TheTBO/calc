import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        }
    }

    render() {
        return (
            <button className="btn bg-gray-800 text-white p-0.5 rounded shadow w-10" onClick={() => this.props.clickHandler(this.state.id)}>
                {this.state.id}
            </button>
        )
    }
}
