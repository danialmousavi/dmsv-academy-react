import React from 'react'
import { Container } from 'react-bootstrap'
import BannerCarousel from './bannerCarousel/BannerCarousel'
import CardWeblog from './CardWeblogs/cardWeblog'
import Suggestions from './Suggestion/Suggestions'
import Plans from './plans/Plans'
import BrandsCard from './Brands/BrandsCard'
import Event from './EventsComponent/Event'
import PodcastSuggestion from './podcasts/PodcastSuggestion'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <>
    <Container>
      <BannerCarousel/>
      <CardWeblog/>
      <Suggestions/>
      <Plans/>
      <BrandsCard/>
      <Event/>
      <PodcastSuggestion/>
    </Container>

    </>
  )
}
