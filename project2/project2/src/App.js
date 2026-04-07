import './App.css';

import Header from './Header';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import employees from './Employees';

function App() {

  let headerInfo = {
    email: '@gmail.com',
    phone: '8700531747'
  }

  return (
    <div className="main">

      <Header headerInfo={headerInfo} cname="rozgarsathi">
        <h3>Welcome to header section from app.js</h3>
      </Header>

      <Container>
        <Row className="g-4">

          {employees.map((v, i) => (
            <ProductItems
              key={i}
              pitems={v}
            />
          ))}

        </Row>
      </Container>

      <Footer />

    </div>
  );
}

function ProductItems({ pitems }) {
  return (
    <Col lg={3} md={4} sm={6} xs={12}>

      <Card className="mb-4 shadow-sm">

        <img
          src={pitems.Image}
          alt={pitems.FIRST_NAME}
          className="card-img-top"
        />

        <Card.Body>

          <Card.Title>
            ID: {pitems.id}
          </Card.Title>

          <Card.Text>
            First Name: {pitems.FIRST_NAME}
          </Card.Text>

          <button className="btn btn-primary">
            Go
          </button>

        </Card.Body>

      </Card>

    </Col>
  );
}

export default App;