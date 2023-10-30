// UseEffect Hook
// basically implement to take care of side efffect things
// side effect which is not related to UI rendering

// HTTP Call
// Handling timer events
// Calling third party libraries or frameworks

// useEffect hook is used for lifecycle methods like
// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

import { useEffect, useState } from "react";
import { dbConnection } from "./dbConnection";

const DemoEffect = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('Sachin');

    return (
        <div>
            <h1>useEffect Hook!</h1>
            <h2>Counter <b className="text-danger">{counter}</b>!</h2>
            <h2>Name <b className="text-danger">{name}</b>!</h2>
            <button onClick={() => setCounter(v => v + 1)}>+</button>
            <button onClick={() => setName(v => v + 'Tendulkar')}>Change</button>

            {/* for componentDidMount, componentDidUpdate */}
            <Simple counter={counter} />

            {/* for componentWillUnmount */}
            {counter < 5 && <DatabaseComp />}
        </div>
    )
}

export default DemoEffect;

const Simple = ({counter}) => {
    useEffect(() => {
        console.log('Simple Component....!', counter);
    // }); // call for every render - componentDidUpate()
    // }, []); // called only once for first time during mounting phase - componentDidMount()
    }, [counter]); // called only when there is change in dependency - props - counter componentDidUpdate but only for specific dependency

    return (
        <h1>Simple Component!</h1>
    )
}

const DatabaseComp = () => {
    const conn = dbConnection();

    useEffect(() => {
        conn.connect();

        // for componentWillUnmount() you will return a method
        return () => {
            conn.disconnect();
        }

    }, []); // only once when componentDidMount()

    return (
        <h1>Database Component!</h1>
    )
};