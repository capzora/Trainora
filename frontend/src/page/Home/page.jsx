import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import WhyTrainora from '../../components/WhyTrainora/WhyTrainora'
import ProgramsOverview from '../../components/ProgramsOverview/ProgramsOverview'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Outcomes from '../../components/Outcomes/Outcomes'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyTrainora/>
      <ProgramsOverview/>
      <HowItWorks/>
      <Outcomes/>
    </div>
  )
}

export default Home
