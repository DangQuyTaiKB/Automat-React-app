import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from 'C:/Users/DMX HANG TRAM/React Project/Main/Tai_Hiep/automat/src/logo.svg';
const Navigation=(props)=>{
    return(
        <Navbar expend="lg" bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/"> 
            <img src={logo} width="40" height="40"  alt="React logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/automat">Automat</Nav.Link>
            <Nav.Link  as={Link} to="/documents">Docs</Nav.Link>
            <Nav.Link  as={Link} to="/templates">Templates</Nav.Link>
            <Nav.Link  as={Link} to="/contactUs">Contact Us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default Navigation