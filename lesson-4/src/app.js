import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'This is the state txt',
            cat: 0
        };
    }
    update(e) {
        this.setState({
            txt: e.target.value
        });
    }
    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.update.bind(this)}>
                </input>
                <h1>Hello world, state: {this.state.txt}</h1>
            </div>
        );
    }
}

export default App;
