import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import podcastsData from './podcastsData';
import CourseCard from '../CourseCard/MainCard';

export default function Podcasts() {
    const [podcasts,setPodcasts]=useState(podcastsData);
  return (
    <Container>
    <Row>
      {podcasts.map(podcast=>(
        <Col key={podcast.id} xs={12} sm={6} md={4} className='g-2'>
          <CourseCard {...podcast}/>
        </Col>
      ))}
    </Row>
  </Container>
  )
}
