import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    };

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    };

    function handleLogin(event) {
        event.preventDefault();
        if (email === 'admin@admin.ee' && password === 'admin') {
            navigate('/');
        } else {
            alert('Kasutajanimi või parool on vale');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type='email' value={email} onChange={handleEmailChange}></input>
                <input type='password' value={password} onChange={handlePasswordChange}></input>
                <button type='submit'>Logi sisse</button>
            </form>
            {/* <button onClick={handleLogin}>Logi sisse</button> */}
        </div>
    );
};

export default Login;
