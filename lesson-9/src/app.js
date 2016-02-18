'use strict';

import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            val: 0
        };
    }
    update() {
        this.setState({
            val: this.state.val + 1
        });
    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        console.log('mounted');
    }
    render() {
        console.log('state', this.state);
        console.log('props', this.props);
        return (
            <InnerComponent
                update={this.update}
                {...this.state}
                {...this.props} />
        );
    }
};

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>;
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>;

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {
            val: 0
        };
    }
    update() {
        this.setState({
            val: this.state.val + 1
        });
    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        console.log('mounted');
    }
    render() {
        return (
            <div>
                <ButtonMixed txt="Button" />
                <br/>
                <LabelMixed txt="Label" />
            </div>
        );
    }
}

App.defaultProps = {
    val: 0,
    txt: 'button'
};

export default App;
