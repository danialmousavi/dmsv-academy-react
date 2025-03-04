import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import podcastsData from './podcastsData';
import { Container, Row } from 'react-bootstrap';

export default function MainPodcast() {
    const [podcasts,setPodcasts]=useState(podcastsData);
    const params=useParams();
    console.log(params);
    const MainPodcast=podcasts.find(podcast=>podcast.id==params.Id);
    console.log(MainPodcast);
  return (
        <>
        <Container>
            <Row>
                <h1 className='text-warning'>{MainPodcast.title}</h1>
                <img src={MainPodcast.img} className='img-fluid' style={{height:'50vh'}} alt="" />
                <p className='text-white fs-4' style={{lineHeight:'2'}}>{MainPodcast.desc}</p>
            </Row>
        </Container>
        </>
    )
}
