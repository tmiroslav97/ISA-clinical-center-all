import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

function HomePage() {
    return (
        <Container>
            <Row>
                <Col md={{ span:10, offset: 1 }} xs={12}>
                    <div className="text-center">
                        <h1>Welecome to Clinic Center System!</h1>
                        <img src="img/home-img.jpg" className="mx-auto d-block" alt="slika"></img>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default HomePage;