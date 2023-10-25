import { useState, createContext, useContext } from 'react';

const NameContext = createContext();

export const ComponentOneUsingContext = () => {
    const [name, setName] = useState('Sachin');

    return (
        <NameContext.Provider value={name}>
            <input type='text' value={name} onChange={(evt) => {
                setName(evt.target.value);
            }}/>
            <h1 className='text-info'>Component One!</h1>
            <h3>{`Welcome ${name}`}</h3>
            <ComponentTwo />
        </ NameContext.Provider>
    )
}

const ComponentTwo = () => {
    const name = useContext(NameContext);

    return (
        <>
            <h1 className='text-info'>
                Component Two!
            </h1>
            <h3>
                {`welcome ${name}`}
            </h3>
            <ComponentThree />
        </>
    )
}

const ComponentThree = () => {
    const name = useContext(NameContext);

    return (
        <>
            <h1 className='text-info'>Component Three!</h1>
            <h3 className='text-success'>{`Welcome ${name}`}</h3>
        </>
    )
}