import React from "react";

class StatefulTest extends React.Component {
    render() {
        return <h1>This is my stateful test {this.props.pet} has an iq of {this.props.iq} {this.props.sex} </h1>
    }
}

export default StatefulTest