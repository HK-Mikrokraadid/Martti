import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://blog.hk.tlu.ee/login', login);
      localStorage.setItem('token', response.data.token);
      setMessage('Oled edukalt sisse loginud');
      setTimeout(() => {
        setMessage(null);
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setLogin({ ...login, password: ''  });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <Row>
        <Col>
          <Card style={{ width: '20rem', padding: '20px' }}>
            <Card.Body>
              <Card.Title className="text-center display-6">Logi sisse</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Sisesta email" 
                    value={login.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Parool</Form.Label>
                  <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Sisesta parool" 
                    value={login.password}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Logi sisse
                </Button>
              </Form>
              {message && <div>{message}</div>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
