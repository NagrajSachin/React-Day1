import { useState } from 'react';

export const ComponentOneUsingProps = () => {
    const [name, setName] = useState('Sachin');

    return (
        <>
            <input type='text' value={name} onChange={(evt) => {
                setName(evt.target.value);
            }}/>
            <h1 className='text-info'>Component One!</h1>
            <h3>{`Welcome ${name}`}</h3>
            <ComponentTwo name={name}/>
        </>
    )
}

const ComponentTwo = ({name}) => {
    return (
        <>
            <h1 className='text-info'>
                Component Two!
            </h1>
            <h3>
                {`welcome ${name}`}
            </h3>
            <ComponentThree name={name}/>
        </>
    )
}

const ComponentThree = ({name}) => {
    return (
        <>
            <h1 className='text-info'>Component Three!</h1>
            <h3 className='text-success'>{`Welcome ${name}`}</h3>
        </>
    )
}