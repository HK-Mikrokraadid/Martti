import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    function handleLoginFormChange(event) {
        // console.log(event.target.name, event.target.value);
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,
        });
    };

    function handleLogin(event) {
        event.preventDefault();
        if (loginData.email === 'admin@admin.ee' && loginData.password === 'admin') {
            navigate('/');
        } else {
            alert('Kasutajanimi või parool on vale');
            setLoginData({
                email: '',
                password: '',
            });
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type='email' name='email' value={loginData.email} onChange={handleLoginFormChange}></input>
                <input type='password' name='password' value={loginData.password} onChange={handleLoginFormChange}></input>
                <button type='submit'>Logi sisse</button>
            </form>
            {/* <button onClick={handleLogin}>Logi sisse</button> */}
        </div>
    );
};

export default Login;
