import { useState } from 'react';

const Todos = () => {
    // Maintaining the collection of todo
    const [Todos, SetTodos] = useState(['Prepare Presentation', 'Learn React', 'Watch Movie']);
    // Todo
    const [Todo, setTodo] = useState('Default Todo');

    return (
        <>
            Todo:- <input type='text' value={Todo} onChange={(evt) => {
                setTodo(evt.target.value);
            }} />
            <button onClick={()=> {
                SetTodos((Todos) => [...Todos, Todo]);
            }}>Add</button>
            <ul className='list-unstyled'>
                {Todos.map((td, index) => {
                    return <li className='display-6 text-primary' key={index}>{td}</li>
                })}
            </ul>
        </>
    )
}

export default Todos;