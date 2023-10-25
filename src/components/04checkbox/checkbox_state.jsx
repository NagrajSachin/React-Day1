import React, { useState } from 'react';

// class Checkbox extends React.Component {
//     constructor() {
//         super(); // Call to base / super class

//         // Maintaining the state, hence it is stateful component
//         this.state = {
//             checked: true
//         }

//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange() {
//         // Never modify the state directly, instead use setState method to modify
//         // this.state.checked = !this.state.checked;

//         // Synchronous version of setState
//         // this.setState({ checked: !this.state.checked });

//         // Asynchronous version of setState
//         this.setState((previousState, props) => {
//             return { checked: !previousState };
//         });
//     }

//     render() {
//         let msg = '';
//         if (this.state.checked) {
//             msg = 'Checked';
//         } else {
//             msg = 'Unchecked';
//         }

//         return (
//             <div>
//                 <input type="checkbox" defaultChecked={this.state.checked}
//                 // Binding outer this
//                 // onChange={this.handleChange.bind(this)}
                
//                 // Binding outer this inside constructor
//                 // onChange={this.handleChange}
                
//                 onChange={() => {
//                     this.handleChange();
//                 }}/>

//                 <h2>The Box is {msg}!</h2>
//             </div>
//         )
//     }
// }

// export default Checkbox;

export default function Checkbox() {
    // React 16.8 onwards we are able to use React Hooks.
    // useState to maintain the state with functional component.

    const [checked, setCheckedState] = useState(true);

    let msg = '';

    if (checked) {
        msg = 'Checked';
    } else {
        msg = 'Unchecked';
    }

    return (
        <>
            <input type='checkbox' defaultChecked={true}
                onChange={() => {
                    setCheckedState(!checked);
                }}
            />

            <h2>The Box is {msg}</h2>
        </>
    )
}