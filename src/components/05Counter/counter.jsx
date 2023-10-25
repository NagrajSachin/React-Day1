import { useState } from 'react';

export default function Counter() {
    const [counter, setCounterState] = useState(0);

    const handleCounterIncrement = () => {
        setCounterState(counter + 1);
    }

    const handleCounterDecrement = () => {
        setCounterState(counter - 1);
    }

    return (
        <>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>

            <h1>Counter: {counter}</h1>
        </>
    )
}