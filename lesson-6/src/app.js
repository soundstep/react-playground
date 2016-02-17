'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
    render() {
        return (
            <input type="range"
                min="0"
                max="255"
                ref="inp"
                onChange={this.props.update}/>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        });
    }
    render() {
        return (
            <div>
                <Slider ref="red" update={this.update}/>
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update}/>
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update}/>
                {this.state.blue}
                <br/>
            </div>
        );
    }
}

export default App;
