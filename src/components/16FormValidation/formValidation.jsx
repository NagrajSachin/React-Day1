import React, { useEffect, useState } from 'react';

export default function MyForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const errors = {};

        if (!name) {
            errors.name = 'Name is Required!';
        }

        if (!email) {
            errors.email = 'Email is Required!';
        }

        if (!password) {
            errors.password = 'Password is Required!';
        } else if (password.length < 6) {
            errors.password = 'Invalid Password!';
        }

        setErrors(errors);

    }, [name, email, password]); // componentDidUpdate()

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(
            name + ' ' + email + ' ' + password
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <br />
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <br />
            <div>
                <label>Password:</label>
                <input type="text" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <br />
            <button className='btn btn-info' style={{ marginLeft: '100px' }}>Submit</button>
        </form>
    )
}