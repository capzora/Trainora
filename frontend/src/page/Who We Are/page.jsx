import React from 'react'
import WhoWeAreHero from '../../components/WhoWeAreHero/WhoWeAreHero'
import TrainerNetworkMap from '../../components/TrainerNetworkMap/TrainerNetworkMap'
import GraduationImpactGraph from '../../components/GraduationImpactGraph/GraduationImpactGraph'
import SectorWiseDistribution from '../../components/SectorWiseDistribution/SectorWiseDistribution'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const Who = () => {
  return (
    <div>
<WhoWeAreHero/>
<TrainerNetworkMap/>
<GraduationImpactGraph/>
<SectorWiseDistribution/>
<CallToActionForm/>
    </div>
  )
}

export default Who
