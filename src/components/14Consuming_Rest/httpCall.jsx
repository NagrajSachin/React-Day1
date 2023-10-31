import React from 'react';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

export const RestFulCallUsers = () => {
    // using custom hook - useFetch
    const [data] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            {data && data.map(item => {
                return <p key={item.id} className='text-info display-6'>{item.name}</p>
            })}
        </>
    )
}

export const RestFulCallTodos = () => {
    const [data, setData] = useState(null);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data));
    }, []); // componentDidMount - where only once you will be making RestFul Service Call

    return (
        <>
            {data && data.map((item) => {
                return <p key={item.id} className='text-info display-6'>{item.title}</p>
            })}
        </>
    )
}