import { useState } from 'react';

// Convert this login form to work with only one state and that too of object

export default function LoginForm() {
    const [formData, setFormData] = useState({ username: 'username', password: 'password' });
    
    const printValues = (evt) => {
        evt.preventDefault();
        console.log(formData.username + ' ' + formData.password);
    }

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        }) 
    }

    return (
        <form onSubmit={printValues}>
            <label>Username:</label>
            <input type='text' value={formData.username} name='username' onChange={(evt) => {
                handleChange(evt);
            }}/>
            <br/>
            <label>Password:</label>
            <input type='password' value={formData.password} name='password' onChange={(evt) => {
                handleChange(evt);
            }}/>
            <br/>
            <button>Submit</button>
        </form>
    )
}