import React from 'react';

class UserState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: "Welcome",
            button: "Enter",
            counter: 0,
        };
    }

    myClick() {
        this.setState((prevState, prevProps) => ({
                intro: prevState.intro === "Welcome" ? "Hello friend" : "Welcome",
                button: prevState.button === "Enter" ? "Exit" : "Enter",
        }), () => {
            console.log(this.state.intro);
        });
    }

    number() {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }


    render() {
        return(
            <div>
                <h1>{this.state.intro}</h1>
                <button onClick={() => this.myClick()}>{this.state.button}</button>
                <button onClick={() => this.number()}>{this.state.counter}</button>
            </div>
        )
    }
}

export default UserState