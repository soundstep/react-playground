import React from 'react';

// class App extends React.Component {
//     render() {
//         return <h1>Title: {this.props.txt}</h1>;
//     }
// }

// OR

// class App extends React.Component {
//     render() {
//         let txt = this.props.txt;
//         return <h1>Title: {txt}</h1>;
//     }
// }

// OR

class App extends React.Component {
    render() {
        let txt = this.props.txt;
        let cat = this.props.cat;
        return <h1>Title: {txt}({typeof txt}), with cat: {cat}({typeof cat})</h1>;
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is default text'
};

export default App;
