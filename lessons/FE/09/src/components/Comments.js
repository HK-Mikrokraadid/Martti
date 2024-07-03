// Comments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';
import config from '../config';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', body: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.API_URL}/posts/${postId}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!newComment.name || !newComment.email || !newComment.body) {
      setError('All fields are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${config.API_URL}/posts/${postId}/comments`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Comment added successfully!');
      setNewComment({ name: '', email: '', body: '' });
      setComments([response.data.comment, ...comments]);
    } catch (error) {
      setError('An error occurred while adding the comment');
    }
  };

  return (
    <Card className="my-5">
      <Card.Body>
        <Card.Title>Comments</Card.Title>
        <ListGroup variant="flush">
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
              <small className="text-muted">{comment.email}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h5 className="mt-4">Add a Comment</h5>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={newComment.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={newComment.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your comment"
              name="body"
              value={newComment.body}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-2'>
            Add Comment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Comments;
