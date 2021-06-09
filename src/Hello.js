import React, {Component} from "react";

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clName: 'black'
        }
    }


    render() {
        return (
            <div className={this.state.clName}>{this.props.isOpen} - {this.props.any}</div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log( '--- From Hello changed props ', nextProps )
        if ( nextProps.isOpen === 'Close' ) {
            this.setState({clName:'red'})
        } else {
            this.setState({clName:'black'})
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

}

export default Hello