import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import PostPage from './components/PostPage';
import Posts from './components/Posts';
import Users from './components/Users';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import AuthProvider from './components/AuthContext';

function App() {
  return (
    <Container>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Container>
  );
};

export default App;
