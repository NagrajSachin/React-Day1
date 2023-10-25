import { useState, useRef } from 'react';

export default function ControlledUnControlledComponent() {
    const [name, setName] = useState('Sachin');

    // Create a Ref
    const inputEle = useRef();

    const handleChange = (evt) => {
        // Modify the source first, automatically get reflected to all the targets
        setName(evt.target.value);
        console.log('State:-', name);
    }

    return (
        <>
            <input type='text' /><br />
            <input type='text' defaultValue='Rahul' /><br/>
            {/* Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. */}
            <input type='text' value='Sourav' /><br/>

            {/* Controlled Component by React */}
            <input type='text' value={name} onChange={handleChange} /><br/>

            {/* Uncontrolled Component by React */}
            <input type='text' defaultValue={name} ref={inputEle}/><br/>

            <button onClick={() => {
                // Through reference getting the value of the control / element
                console.log(inputEle.current.value);
            }}>Get</button>
        </>
    )
}