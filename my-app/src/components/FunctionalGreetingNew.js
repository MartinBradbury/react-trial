import React from "react";

const FunctionalGreetingNew = (props) =>  {
    console.log(props);
    return (
    <div>
        <h1>Hello, {props.name}! I see you're {props.age} years old; {props.greeting} </h1>
        <p>{props.addUser ? "New user added" : "No new User"}</p>
    </div>
    )
}
export default FunctionalGreetingNew;