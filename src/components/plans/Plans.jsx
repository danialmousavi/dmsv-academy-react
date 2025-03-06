import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './plans.css';
// import planData from "./plansData";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  useEffect(()=>{
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/planData.json').then(res=>res.json()).then(data=>setPlans(data))
  },[])
  return (
    <>
      <Container className="mt-5">
        <Row>
          {plans.map((plan) => (
            <Card className="customs-card border-0 rounded-3" key={plan.title} style={{ backgroundColor: '#1D1E1F' }}>
              <Row className="p-3">
                <Col sm={2} className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Img variant="top" src="images/goldstar.png" style={{ width: '100px', height: '100px' }} />
                  <h2 className="text-warning text-center fs-4">{plan.title}</h2>
                </Col>
                <Col sm={8} className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Body className="align-baseline">
                    <li className="text-white list-unstyled"><TiTick />{plan.time}</li>
                    <li className="text-white list-unstyled"><TiTick />{plan.support}</li>
                    <h2 className="text-warning">price: {plan.price}$</h2>
                  </Card.Body>
                </Col>
                <Col sm={2} className="d-flex align-items-center justify-content-center">
                  <Link variant="outline-warning" className="btn btn-outline-warning text-center d-flex align-items-center justify-content-center w-100 h-50" to='/register' >Register</Link>
                </Col>
              </Row>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}