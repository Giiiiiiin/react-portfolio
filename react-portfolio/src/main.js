import React from "react";
//
function Welcome(props) {
    console.log("bro");
    return <h1>Hello {props.surname}!</h1>
}

//Functional Component
const MyComponent = (props) => {
    //something
    return(
        <div>
            
            <h1><Welcome surname="Kurusu"></Welcome></h1>
            <h1>Hi! I am {props.name}. This is MyComponent</h1>
            <p>This is a simple {props.project} component.</p>
        </div>
    )
}

export default MyComponent;