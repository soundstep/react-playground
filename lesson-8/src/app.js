'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            increasing: false
        };
    }
    update() {
        ReactDOM.render(
            <App val={this.props.val+1} />,
            document.getElementById('app')
        );
    }
    componentWillReceiveProps(nextProps) {
        this.state = {
            increasing: nextProps.val > this.props.val
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('next props:', nextProps);
        console.log('next state:', nextState);
        return nextProps.val % 5 === 0;
    }
    render() {
        console.log(this.state.increasing);
        return (
            <div>
                <p>Click 5 times!</p>
                <button onClick={this.update}>
                    {this.props.val}
                </button>
            </div>
        );
    }
}

App.defaultProps = {
    val: 0
};

export default App;
