import {Navbar,Nav,Container} from 'react-bootstrap'
import logo from 'C:/Users/DMX HANG TRAM/React Project/Main/Tai_Hiep/automat/src/logo.svg';
const NavbarComponent=(props)=>{
    return(
        <Navbar expend="lg" bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand> 
            <img src={logo} width="40" height="40"  alt="React logo"/>
          </Navbar.Brand>
          <Nav className="me-auto" defaultActiveKey="automat" onSelect={(key)=>props.handleSelect(key)}>
            <Nav.Link  eventKey="home">Home</Nav.Link>
            <Nav.Link  eventKey="automat">Automat</Nav.Link>
            <Nav.Link  eventKey="documents">Docs</Nav.Link>
            <Nav.Link  eventKey="contactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    );
}
export default NavbarComponent