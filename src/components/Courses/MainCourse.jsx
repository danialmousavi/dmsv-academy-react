import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseData from '../../coursesData';
import { Container, Row ,Col} from 'react-bootstrap';
import CourseDataCard from './CourseDataCard';

export default function MainCourse() {
    const [courses,setCourses]=useState(CourseData);
    const params=useParams();
    const course=courses.find(course=>course.id==params.Id);
    // console.log(course);
  return (
    <>
    <Container>
        <Row>
                
                    <Col sm={12} md={8}>
                        <img className='img-fluid rounded-5' src={course.img} alt="" />
                        <h1 className='text-warning mt-3 '>{course.title}</h1>
                        <p className='text-white mt-3 fs-5' style={{lineHeight:'50px'}}>{course.desc}</p>
                    </Col>
                    <Col sm={12} md={4}>
                    <CourseDataCard course={course}/>
                    </Col>
 
  
        </Row>
    </Container>
    </>
  )
}
