import { Carousel, Container, Row, Col } from "react-bootstrap";
import './BannerCarousel.css';
import { useEffect, useState } from "react";
function BannerCarousel() {
  const [slides,setSlide]=useState([]);
  useEffect(()=>{
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/slides.json').then(res=>res.json()).then(data=>setSlide(data)
    )
  },[])
  return (
    <Carousel interval={3000} pause="hover">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="align-items-center">
              {/* Left Column - Image */}
              <Col xs={12} md={6} className="text-center">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="img-fluid rounded "
                />
              </Col>

              {/* Right Column - Text */}
              <Col xs={12} md={6} className="text-center text-md-start p-4">
                <h3 className="text-warning">{slide.title}</h3>
                <p className="text-white">{slide.text}</p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerCarousel;