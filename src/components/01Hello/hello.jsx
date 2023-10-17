import React from "react";

// functional component - recommended
export default function HelloFunctional() {
    return <h1>Hello World - Functional Component</h1>
}

// class component
export class HelloClass extends React.Component{
    render() {
        return <h1>Hello World - Class Component!</h1>
    }
}

// Arrow function with explicit return
const Explicit = () => {
    return (
        <h1>Hello World - explicit component</h1>
    )
}

// Arrow function with implicit return
const Implicit = () => (
    <h1>Hello World - implicit component</h1>
)

export { Explicit, Implicit }