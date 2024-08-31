import React,{ useSate, useState } from 'react';

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useSate('');
    const [error, setError] = useSate('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password){
            setError('Please fill in both email and password.');
            return;
        }
        setError('');
        alert("Login successful");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type='submit'>Login</button>
        </form>
    )
}