import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }


    myClickIn = () => {
        this.setState({
          isLoggedIn: true,
        });
        console.log(this);
      };
    
    myClickOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };



      //Single Signin//
    // myClick = () => {
    //     this.setState((prevState) => ({
    //         isLoggedIn: prevState.isLoggedIn === true ? false : true,
    //     }))
    // }




    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn} 
                    myClickIn={this.myClickIn}
                    myClickOut={this.myClickOut}
                    />
            </div>
        )
    }
}

export default MethodsAsPropsParent