import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import podcastsData from './podcastsData';
import CourseCard from '../CourseCard/MainCard';

export default function Podcasts() {
    const [podcasts,setPodcasts]=useState([]);
    useEffect(()=>{
    fetch('https://academy-d62cf-default-rtdb.firebaseio.com/podcastsData.json').then(res=>res.json()).then(data=>setPodcasts(data))
    },[])
  return (
    <Container style={{backgroundColor:'#1D1E1F'}}>
      {podcasts.length > 0 ? (<>
        <Row>
      {podcasts.map(podcast=>(
        <Col key={podcast.id} xs={12} sm={6} md={4} className='g-2'>
          <CourseCard {...podcast}/>
        </Col>
      ))}
    </Row>
      </>):(<div className='text-white ' style={{height:'100vh'}}><h1>loading...</h1></div>)}
  </Container>
  )
}
