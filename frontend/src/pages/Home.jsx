import React from 'react'
import Hero from '../componnents/Hero'
import LatestCollection from '../componnents/LatestCollection'
import BestSellesr from '../componnents/BestSellesr'
import OurPolicy from '../componnents/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellesr/>
      <OurPolicy/>
    </div>
  )
}

export default Home
