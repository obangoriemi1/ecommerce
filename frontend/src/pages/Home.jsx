import React from 'react'
import Hero from '../componnents/Hero'
import LatestCollection from '../componnents/LatestCollection'
import BestSellesr from '../componnents/BestSellesr'
import OurPolicy from '../componnents/OurPolicy'
import NewsletterBox from '../componnents/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellesr/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
