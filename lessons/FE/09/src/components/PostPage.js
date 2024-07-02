// PostPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Modal, Form, Alert } from 'react-bootstrap';
import config from '../config';

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editPost, setEditPost] = useState({ title: '', body: '' });
  const [message, setMessage] = useState(null);

  const fetchPost = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.API_URL}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPost(response.data.post);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id, showEditModal]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPost((prevEditPost) => ({
      ...prevEditPost,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(`${config.API_URL}/posts/${id}`, editPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage({
        message: response.data.message,
        variant: 'success',
      });
      setTimeout(() => {
        setMessage(null);
        setShowEditModal(false);
        navigate(`/posts/${id}`);
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage({
        message: error.response.data.message,
        variant: 'danger',
      });
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${config.API_URL}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = () => {
    setEditPost({ title: post.title, body: post.body });
    setShowEditModal(true);
  };

  if (loading) {
    return (
      <Container className="my-5">
        <h2>Fetching data ...</h2>
      </Container>
    );
  }

  if (!post && !loading) {
    return (
      <Container className="my-5">
        <h2>Post not found</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>{ post.title }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ `${post.firstName} ${post.lastName}` }</Card.Subtitle>
          <Card.Text>{ post.body }</Card.Text>
            <Button variant="primary" onClick={openEditModal}>Edit</Button>
            <Button variant="danger" onClick={handleDelete} className="ms-2">Delete</Button>
        </Card.Body>
      </Card>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && <Alert variant={message.variant}>{message.message}</Alert>}
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={editPost.title}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter body"
                name="body"
                value={editPost.body}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-2'>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PostPage;
