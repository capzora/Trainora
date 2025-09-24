import React from 'react'
import ReferHero from '../../components/ReferHero/ReferHero'
import HowReferWorks from '../../components/HowReferWorks/HowReferWorks'
import ReferralForm from '../../forms/ReferralForm/ReferralForm'
import ReferralInstructions from '../../components/ReferralInstructions/ReferralInstructions'
import CallSection from '../../components/CallToAction/CallToAction'
const Refer = () => {
  return (
    <div>
      <ReferHero/>
      <HowReferWorks/>
      <ReferralForm/>
      <ReferralInstructions/>
      <CallSection/>
    </div>
  )
}

export default Refer
