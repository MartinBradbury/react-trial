import React from 'react';

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello",
            buttonText: "Exit",
            count: 0,
        };
    }
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('prevState', prevState)
            console.log('prevProps', prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter"
            }
        })
    }  


    increment() {
        this.setState((prevState, prevProps) => {
            console.log('prevState', prevState)
            console.log('prevProps', prevProps)
            return {
                count: prevState.count + 1
            }

        }


        )
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction}, This is a stateful Greeting {this.props.greeting} welcome back {this.props.name} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>

        ) 
    }
    
}

export default StatefulGreeting