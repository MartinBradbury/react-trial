import React from 'react';

class StatefulGreeting extends React.Component {
    render() {
        return <h1>This is a stateful Greeting {this.props.greeting} welcome back {this.props.name} </h1>
    }


}

export default StatefulGreeting