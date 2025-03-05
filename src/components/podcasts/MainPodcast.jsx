import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import podcastsData from './podcastsData';
import { Container, Row } from 'react-bootstrap';

export default function MainPodcast() {
    useEffect(()=>{
        fetch('https://academy-d62cf-default-rtdb.firebaseio.com/podcastsData.json').then(res=>res.json()).then(data=>setPodcasts(data))
    },[])
    const [podcasts,setPodcasts]=useState([]);
    const params=useParams();
    console.log(params);
    const MainPodcast=[];
    MainPodcast.push(podcasts.find(podcast=>podcast.id==params.Id));
    console.log(MainPodcast);
  return (
        <>
        <Container>
            <Row>
          {MainPodcast.length > 0 && MainPodcast[0] ? (
            <>
                <img className='img-fluid rounded-5' src={MainPodcast[0].img} alt="" />
                <h1 className='text-warning mt-3 '>{MainPodcast[0].title}</h1>
                <p className='text-white mt-3 fs-5' style={{lineHeight:'50px'}}>{MainPodcast[0].desc}</p>
            </>
          ) : (
            <div className='text-white ' style={{height:'100vh'}}><h1>loading...</h1></div>

          )}
            </Row>
        </Container>
        </>
    )
}
