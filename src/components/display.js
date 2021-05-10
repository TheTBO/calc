import React from 'react';

export default class Display extends React.Component {
    render() {
        return (
            <div className='p-2 bg-lcd font-lcd text-lg mb-2 mt-1'>
                {this.props.value}
            </div>
        );
    }
}
