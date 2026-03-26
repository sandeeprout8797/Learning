import './App.css';
import Header from './Header'
import Footer from './Footer';

function App() {
  let name = "This is the main div - Project";

  return (
    <div className="Name">
      <h1>H1: {name}</h1>

      <Header />
        <div className='rowCardItemDiv'>
            <Card className="cardItem"/>
            <Card className="cardItem"/>
            <Card className="cardItem"/>
            <Card className="cardItem"/>
            <Card className="cardItem"/>
        </div>
      <Footer />
    </div>
  );
}

export default App;

function Card() {
    return (
        <div className='cardItemsFunctionDiv'>
            Card Div
        </div>
    )
}