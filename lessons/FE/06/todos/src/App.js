import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row className='text-center'>
        <h1>Pealkiri</h1>
      </Row>
      <Row>
        <Col md={9}>
          <Todos />
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
