import React from 'react';
import './ClassBasedTrafficLight.css';

class ClassBasedTrafficLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        };
    }

    nextState = () => {
        this.setState((prevState) => {
            switch (prevState.color) {
                case 'red':
                    return { color: 'green' };
                case 'green':
                    return { color: 'yellow' };
                case 'yellow':
                    return { color: 'red' };
                default:
                    return prevState;
            }
        });
    };

    handleButtonClick = () => {
        this.nextState();
    };

    render() {
        const { color } = this.state;
        return (
            <div>
                <div className={color === 'red' ? 'light red' : 'light off'}></div>
                <div className={color === 'yellow' ? 'light yellow' : 'light off'}></div>
                <div className={color === 'green' ? 'light green' : 'light off'}></div>
                <button onClick={this.handleButtonClick}>Next State</button>
            </div>
        );
    }
}

export default ClassBasedTrafficLight;
