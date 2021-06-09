import React, {Component} from 'react';
import Hello from "./Hello";

class App extends Component {

    // 1. Initialisation
    constructor(props) {
        super(props);
        console.log('--- constructor')
        this.state = {
            isOpen: true,
            anyField: 'Any'
        }
    }

    componentWillMount() {
        console.log('--- will mount')
    }

    render() {
        console.log( '--- render' )
        return (
            <div id="help">
                Hello world { this.state.isOpen ? 'Open' : 'Close' }
                <br/>
                <button onClick={ ()=> { this.setState({isOpen: !this.state.isOpen, anyField: 'Any1'}); }  }>Change</button>
                <Hello isOpen={this.state.isOpen ? 'Open' : 'Close'} any={this.state.anyField} />
            </div>
        )
    }

    componentDidMount() {
        console.log('--- did mount')
        document.querySelector('#help').style.color = 'red';
    }

    // 2. Updating
    componentWillReceiveProps(nextProps) {

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // return nextState.anyField === this.state.anyField;
    //
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('--- will update')
        document.querySelector('#help').classList.add('updating')
    }

    // render()

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 3. Deleting
    componentWillUnmount() {

    }

}

export default App;
