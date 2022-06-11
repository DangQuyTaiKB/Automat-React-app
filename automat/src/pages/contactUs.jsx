import {Card,Row,Col,Button} from  'react-bootstrap'

const ContactUs=(props)=>{
    return(
        <Row>
            <Col>
                <Card border="primary" style={{ width: '18rem'}}>
                    <Card.Header as="h3">Student</Card.Header>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Nguyen Thanh Hiep</Card.Title>
                    <Card.Text>
                        Phone:
                        <br/>
                        Adress:
                        <br/>
                        Email:
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">hhhhh</small>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border="primary" style={{ width: '18rem'}}>
                    <Card.Header as="h3">Student</Card.Header>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Phone:
                        <br/>
                        Adress:
                        <br/>
                        Email:
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">hhhhh</small>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
}
export default ContactUs