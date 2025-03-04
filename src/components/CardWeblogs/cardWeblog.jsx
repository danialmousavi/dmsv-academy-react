import React from 'react'
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
 import './cardWeblogs.css'
export default function CardWeblog() {
    const cards = [
        { title: "Instagram", text: "Follow Us", imgSrc: "images/Instagram.png" },
        { title: "SEO", text: "New methods of SEO", imgSrc: "images/google.png" },
        { title: "wordpress", text: "Build websites with wordpress", imgSrc: "images/Wp.png" },
        { title: "Bussines", text: "Find job Easily", imgSrc: "images/business.png" },
        { title: "Instagram", text: "Follow Us", imgSrc: "images/Instagram.png" },
        { title: "SEO", text: "New methods of SEO", imgSrc: "images/google.png" },
        { title: "wordpress", text: "Build websites with wordpress", imgSrc: "images/Wp.png" },
        { title: "Bussines", text: "Find job Easily", imgSrc: "images/business.png" },
      ];
    
      const chunkArray = (arr, size) =>
        arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
        const cardSlides = chunkArray(cards, 4); // Group into slides of 4 cards
      
        return (
            <Container className="mt-4">
            <Carousel interval={3000} indicators={true} pause="hover">
              {cardSlides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center">
                    {slide.map((card, idx) => (
                      <Col key={idx} xs={12} md={6} lg={3} className="d-flex justify-content-center">
                        <Card className="custom-card d-flex flex-row" style={{backgroundColor:'#1D1E1F'}}>
                          {/* Left Column - Image */}
                          <div className="card-img-container">
                            <Card.Img variant="top" src={card.imgSrc} className="card-img" />
                          </div>
      
                          {/* Right Column - Text */}
                          <Card.Body className="d-flex flex-column justify-content-center">
                            <Card.Title className='text-warning'>{card.title}</Card.Title>
                            <Card.Text className='text-white'>{card.text}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        );
      };
