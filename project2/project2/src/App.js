import './App.css';

import Header from './Header';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {
  let headerInfo = {
    email: '@gmail.com',
    phone: '8700531747'
  }
  return (

    <div className="main">

      <Header headerInfo={headerInfo} cname="rozgarsathi">
        <h3> Welcome to header section from app.js </h3>
      </Header>

      <Footer />

    </div>
  );
}

export default App;