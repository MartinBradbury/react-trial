import React from "react";

class StatefulTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: "Test",
            end: "End Test",
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.init}This is my stateful test {this.props.pet} has an iq of {this.props.iq} {this.props.sex} </h1>
                <button>{this.state.end}</button>
            </div>
    )
    }
}

export default StatefulTest