import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount () {
        document.title = `you have clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        document.title = ` you have clicked ${this.state.count} times`
    }


    
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Count {this.state.count} times
                </button>
                
            </div>
        );
    }
}

export default Home;