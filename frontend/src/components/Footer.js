import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// py - padding on the y axes (top & bottom)
const Footer = () => {
    return <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyrigth &copy; EseShop
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer
