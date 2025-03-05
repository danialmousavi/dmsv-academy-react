import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseData from '../../coursesData';
import { Container, Row ,Col} from 'react-bootstrap';
import CourseDataCard from './CourseDataCard';

export default function MainCourse() {
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
      fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json').then(res=>res.json()).then(data=>setCourses(data))
    },[])
    const params=useParams();
    const course=[];
    course.push(courses.find(course=>course.id==params.Id));
    console.log(course);
  return (
    <>
      <Container>
        <Row>
          {course.length > 0 && course[0] ? (
            <>
              <Col sm={12} md={8}>
                <img className='img-fluid rounded-5' src={course[0].img} alt="" />
                <h1 className='text-warning mt-3 '>{course[0].title}</h1>
                <p className='text-white mt-3 fs-5' style={{lineHeight:'50px'}}>{course[0].desc}</p>
              </Col>
              <Col sm={12} md={4}>
                <CourseDataCard course={course[0]} />
              </Col>
            </>
          ) : (
            <div className='text-white ' style={{height:'100vh'}}><h1>loading...</h1></div>

          )}
        </Row>
      </Container>
    </>
  )
}
