import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import axios from 'axios' 
function App() {
  
  return (
    <Router>

      <Header></Header>
      <main className='py-3'>
        <Container>
          <Routes>
              <Route path='/' element={<HomeScreen/>} exact/>     
              <Route path='/product/:id' element={<ProductScreen/>} />     
          </Routes>
        </Container>
      </main>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
