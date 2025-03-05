import React, { useEffect, useState } from 'react'
import { Container,Carousel ,Row,Col} from 'react-bootstrap'
import CourseCard from '../CourseCard/MainCard'
import CourseData from '../../coursesData'
import './Suggestions.css'
import { Link } from 'react-router-dom'
export default function Suggestions() {
  
    useEffect(()=>{
      fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json').then(res=>res.json()).then(data=>setCourses(data))
    },[])
    const [courses, setCourses] = useState([]);
    const displayedCourses = courses.slice(1, 7);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
  
    // Function to detect screen size and adjust chunk size
    useEffect(() => {
      const updateCardsPerSlide = () => {
        if (window.innerWidth < 576) {
          setCardsPerSlide(1); // xs screens: 1 card per slide
        } else if (window.innerWidth < 992) {
          setCardsPerSlide(2); // md screens: 2 cards per slide
        } else {
          setCardsPerSlide(3); // lg screens: 3 cards per slide
        }
      };
  
      updateCardsPerSlide(); // Initial check
      window.addEventListener("resize", updateCardsPerSlide);
      return () => window.removeEventListener("resize", updateCardsPerSlide);
    }, []);
  
    // Function to split array dynamically based on screen size
    const chunkArray = (arr, size) => {
        let result = [];
        
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size)); // Take 'size' number of items and add to result
        }
        
        return result;
      };
    return (
      <Container className="mt-4 h-100">
        <div className='d-flex justify-content-between'>
            <h1 className='text-warning'>Suggestions</h1>
            <Link to='/courses' className='d-flex justify-content-center align-items-center btn btn-outline-warning'>more Courses </Link>
        </div>
        <Carousel interval={3000} indicators={true} pause="hover">
          {/* Dynamically split courses based on screen size */}
          {chunkArray(displayedCourses, cardsPerSlide).map((slide, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {slide.map((course, idx) => (
                  <Col key={idx} xs={12} md={6} lg={4} className="d-flex justify-content-center">
                    <CourseCard {...course} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
}
