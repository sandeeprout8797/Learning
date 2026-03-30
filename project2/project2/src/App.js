import logo from './logo.svg';
import './App.css';
 
import Header from './Header';
import Footer from './Footer';

function App() {
  let name = "sandeep";

  return (
    <div className='container'>
      <h1 className='text-danger'> Hello </h1>
    </div>
  );
}

function Card() {
  return (
    <div className='cardDiv'>
      <h1> Card Division </h1>
    </div>
  )
}

export default App;
