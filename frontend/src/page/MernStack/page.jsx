import React from 'react'
import MERNHeroSection from '../../components/MERNHeroSection/MERNHeroSection'
import MERNProgramOutcomes from '../../components/MERNProgramOutcomes/MERNProgramOutcomes'
import MERNProgramOverview from '../../components/MERNProgramOverview/MERNProgramOverview'
import MERNSyllabusOverview from '../../components/MERNSyllabusOverview/MERNSyllabusOverview'
import MERNProjectsShowcase from '../../components/MERNProjectsShowcase/MERNProjectsShowcase'
import MERNToolsTechnologies from '../../components/MERNToolsTechnologies/MERNToolsTechnologies'
import TrainerProfile from '../../components/TrainerProfile/TrainerProfile'
import KeyBenefits from '../../components/KeyBenefits/KeyBenefits'
import AdditionalBenefits from '../../components/AdditionalBenefits/AdditionalBenefits'
import FeeStructure from '../../components/FeeStructure/FeeStructure'
import HiringPartners from '../../components/HiringPartners/HiringPartners'
import SuccessStories from '../../components/SuccessStories/SuccessStories'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const MERNStack = () => {
  return (
    <div>
      <MERNHeroSection/>
      <MERNProgramOverview/>
      <MERNProgramOutcomes/>
      <MERNSyllabusOverview/>
      <MERNProjectsShowcase/>
      <MERNToolsTechnologies/>
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

export default MERNStack
