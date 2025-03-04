import React, { useState } from 'react'
import CourseData from '../../coursesData'
import { Container,Row,Col } from 'react-bootstrap'
import CourseCard from '../CourseCard/MainCard'
export default function Courses() {
  const [courses,setCourses]=useState(CourseData);
  return (
    <>
      <Container>
        <Row>
          {courses.map(course=>(
            <Col key={course.id} xs={12} sm={6} md={4} className='g-2'>
              <CourseCard {...course}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
