import './App.css';
import logo from './logo.svg';
import Automat from "./components/automat"

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return(
  <>
    <Navbar expend="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home"> 
          <img src={logo} width="40" height="40"  alt="React logo"/>
          TH
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Automat/>;
  </>
  );
}

export default App;
