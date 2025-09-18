import React from 'react'
import JavaHeroSection from '../../components/JavaHeroSection/JavaHeroSection'
import JavaProgramOverview from '../../components/JavaProgramOverview/JavaProgramOverview'
import JavaProgramOutcomes from '../../components/JavaProgramOutcomes/JavaProgramOutcomes'
import JavaSyllabusOverview from '../../components/JavaSyllabusOverview/JavaSyllabusOverview'
import JavaProjectsShowcase from '../../components/JavaProjectsShowcase/JavaProjectsShowcase'
import TrainerProfile from '../../components/TrainerProfile/TrainerProfile'
import KeyBenefits from '../../components/KeyBenefits/KeyBenefits'
import AdditionalBenefits from '../../components/AdditionalBenefits/AdditionalBenefits'
import FeeStructure from '../../components/FeeStructure/FeeStructure'
import HiringPartners from '../../components/HiringPartners/HiringPartners'
import SuccessStories from '../../components/SuccessStories/SuccessStories'
import CallToAction from '../../components/CallToAction/CallToAction'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const JavaFullStack = () => {
  return (
    <div>
    <JavaHeroSection/>
    <JavaProgramOverview/>
    <JavaProgramOutcomes/>
    <JavaSyllabusOverview/>
    <JavaProjectsShowcase/>
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

export default JavaFullStack
