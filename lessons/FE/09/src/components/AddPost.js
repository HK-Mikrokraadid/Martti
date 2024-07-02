// AddPost.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../config';

const AddPost = ({ onPostAdded }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!post.title || !post.body) {
      setError('Both title and body are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${config.API_URL}/posts`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const id = response.data.id;
      setSuccess(`Post added successfully with id ${id}`);
      setPost({ title: '', body: '' });
      onPostAdded(response.data);
    } catch (err) {
      setError('An error occurred while adding the post');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <h1 className="display-4">Posts</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={post.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter body"
                name="body"
                value={post.body}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Add Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
