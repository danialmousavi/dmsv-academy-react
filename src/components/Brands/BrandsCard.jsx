import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./BrandsCard.css";
import BrandsData from "./Brands";
export default function BrandsCard() {
  const [brands, setBrands] = useState([]);
  useEffect(()=>{
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/BrandsData.json').then(res=>res.json()).then(data=>setBrands(data));
  })
  return (
    <>
      <Container className="mt-5
      " >
        <h1 className="text-warning">Our Customers</h1>
        <Row className="d-flex justify-content-center align-items-center ">
          {brands.map((brand) => (
            <Col md={4} className="brand-card" key={brand.id} >
              <Card className="text-center border-0 flex-row" style={{backgroundColor:'#1D1E1F'}}>
                <Col className="d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    src={brand.img}
                    className="img-fluid"
                    style={{width:'100px',height:'100px'}}
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Card.Body>
                    <Card.Title className="text-white">{brand.title}</Card.Title>
                  </Card.Body>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
