import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CourseCard from '../CourseCard/MainCard'
export default function Courses() {
  const [courses,setCourses]=useState([]);

  useEffect(()=>{
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json').then(res=>res.json()).then(data=>setCourses(data))
  },[])
  return (
    <Container style={{ backgroundColor: '#1D1E1F' }}>
      {courses.length > 0 ? (
        <Row>
          {courses.map(course => (
            <Col key={course.id} xs={12} sm={6} md={4} className='g-2'>
              <CourseCard {...course} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className='text-white ' style={{height:'100vh'}}><h1>loading...</h1></div>
      )}
    </Container>
  )
}
