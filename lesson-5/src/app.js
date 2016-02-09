'use strict';

import React from 'react';

const Widget = (props) => {
    return (
        <div>
            <input type="text"
                onChange={props.update}>
            </input>
            <h1>{props.txt}</h1>
        </div>
    );
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'This is the state txt',
            cat: 0
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            txt: e.target.value
        });
    }
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update}/>
            </div>
        );
    }
}

export default App;
