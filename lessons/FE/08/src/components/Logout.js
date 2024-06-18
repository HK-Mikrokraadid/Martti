import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    };

    return (
        <Button onClick={logout} variant='primary' size='sm'>Logout</Button>
    );
};

export default Logout;
