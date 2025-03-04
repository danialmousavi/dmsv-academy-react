import React, { useState } from 'react'
import podcastsData from './podcastsData';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../CourseCard/MainCard';

export default function PodcastSuggestion() {
    const [podcasts,setPodcasts]=useState(podcastsData);
    const newPodcasts=podcasts.slice(0,3);
  return (
    <>
    <Container className='mt-4 h-100'>
        <h1 className='text-warning'>Podcasts</h1>
    <Row>
      {newPodcasts.map(podcast=>(
        <Col key={podcast.id} xs={12} sm={6} md={4} className='g-2'>
          <CourseCard {...podcast}/>
        </Col>
      ))}
    </Row>
  </Container>
    </>
)
}
