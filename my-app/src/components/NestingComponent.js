import React, { Component } from 'react'
import UsrMsg from './UsrMsg'
import UsrData from './UsrData'

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            isLoggedIn: false,
        }
    }
    render() {
        return (
            <div>
                <UsrData isLoaded={this.state.isLoaded} />
                <UsrMsg isLoggedIn={this.state.isLoggedIn} />
                
            </div>
        )
    }
}

export default NestingComponents