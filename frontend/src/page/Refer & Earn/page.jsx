import React from 'react'
import ReferHero from '../../components/ReferHero/ReferHero'
import HowReferWorks from '../../components/HowReferWorks/HowReferWorks'
import ReferralForm from '../../forms/ReferralForm/ReferralForm'
import ReferralInstructions from '../../components/ReferralInstructions/ReferralInstructions'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const Refer = () => {
  return (
    <div>
      <ReferHero/>
      <HowReferWorks/>
      <ReferralForm/>
      <ReferralInstructions/>
      <CallToActionForm/>
    </div>
  )
}

export default Refer
