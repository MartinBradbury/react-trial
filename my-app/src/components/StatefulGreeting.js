import React from 'react';

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello",
            buttonText: "Exit",
        };
    }
    render() {
        return(
            <div>
                <h1>{this.state.introduction}, This is a stateful Greeting {this.props.greeting} welcome back {this.props.name} </h1>
                <button>{this.state.buttonText}</button>


            </div>

        ) 
    }


}

export default StatefulGreeting