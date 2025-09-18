import React from 'react'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import Mission from '../../components/Mission/Mission'
import Vision from '../../components/Vision/Vision'
import Team from '../../components/Team/Team'
import Stats from '../../components/Stats/Stats'
import CallToAction from '../../components/CallToAction/CallToAction'

const About = () => {
  return (
    <div>
      <WelcomeSection/>
      <Mission/>
      <Vision/>
      <Team/>
      <Stats/>
      <CallToAction/>
    </div>
  )
}

export default About
