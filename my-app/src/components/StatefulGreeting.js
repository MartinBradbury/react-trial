import React from 'react';

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello",
            buttonText: "Exit",
        };
    }
    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, () => {
            console.log('after', this.state.introduction);
            console.log('after', this.state.buttonText);

        });
        
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction}, This is a stateful Greeting {this.props.greeting} welcome back {this.props.name} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>


            </div>

        ) 
    }


}

export default StatefulGreeting