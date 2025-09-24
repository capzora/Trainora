import React from 'react'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import Mission from '../../components/Mission/Mission'
import Vision from '../../components/Vision/Vision'
import Team from '../../components/Team/Team'
import Stats from '../../components/Stats/Stats'
import TrustedByGovt from '../../components/TrustedByGovt/TrustedByGovt'
import CallSection from '../../components/CallToAction/CallToAction'

const About = () => {
  return (
    <div>
      <WelcomeSection/>
      <Mission/>
      <Vision/>
      <TrustedByGovt/>
      <Team/>
      <Stats/>
      <CallSection/>
    </div>
  )
}

export default About
