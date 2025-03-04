import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import CountdownTimer from '../CoundownTimer/timer'

export default function Event() {
  return (
    <Container style={{height:'100vh',display:'flex', alignItems:'center'}} className='mt-5'>
        <Row>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                <img src="images/person-ok.webp" className='img-fluid' alt="" />
            </Col>
            <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
            <CountdownTimer eventDate="2025-06-01T12:00:00" />
            </Col>
        </Row>
    </Container>
  )
}
