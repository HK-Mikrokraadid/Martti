// PostPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import config from '../config';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  
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
  }, []);

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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostPage;
