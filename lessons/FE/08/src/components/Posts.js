import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import Post from './Post';
// import { posts } from '../data/samplePosts'; // Impordime näidisandmed

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://blog.hk.tlu.ee/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.posts);
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/login');
      }
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Posts</h1>
          <p>Kokku on {posts.length} postitust</p>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.content}
            author={`${post.firstName} ${post.lastName}`}
            createdAt={post.created_at}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
