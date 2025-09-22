import React from 'react'
import DevOpsHeroSection from '../../components/DevOpsHeroSection/DevOpsHeroSection'
import DevOpsProgramOverview from '../../components/DevOpsProgramOverview/DevOpsProgramOverview'
import DevOpsProgramOutcomes from '../../components/DevOpsProgramOutcomes/DevOpsProgramOutcomes'
import DevOpsSyllabusOverview from '../../components/DevOpsSyllabusOverview/DevOpsSyllabusOverview'
import DevOpsProjectsShowcase from '../../components/DevOpsProjectsShowcase/DevOpsProjectsShowcase'
import DevOpsToolsTechnologies from '../../components/DevOpsToolsTechnologies/DevOpsToolsTechnologies'
import TrainerProfile from '../../components/TrainerProfile/TrainerProfile'
import KeyBenefits from '../../components/KeyBenefits/KeyBenefits'
import AdditionalBenefits from '../../components/AdditionalBenefits/AdditionalBenefits'
import FeeStructure from '../../components/FeeStructure/FeeStructure'
import HiringPartners from '../../components/HiringPartners/HiringPartners'
import SuccessStories from '../../components/SuccessStories/SuccessStories'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const DevOpsEngineering = () => {
  return (
    <div>
      <DevOpsHeroSection/>
      <DevOpsProgramOverview/>
      <DevOpsProgramOutcomes/>
      <DevOpsSyllabusOverview/>
      <DevOpsProjectsShowcase/>
      <DevOpsToolsTechnologies/>
      <TrainerProfile/>
      <KeyBenefits/>
      <AdditionalBenefits/>
      <FeeStructure/>
      <HiringPartners/>
      <SuccessStories/>
<CallToActionForm/>
    </div>
  )
}

export default DevOpsEngineering
