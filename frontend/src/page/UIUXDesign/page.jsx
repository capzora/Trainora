import React from "react";
import HeroSection from "../../components/ProgramHeroSection/ProgramHerosection";
import ProgramOverview from "../../components/ProgramOverview/ProgramOverview";
import ProgramOutcomes from "../../components/ProgramOutcomes/ProgramOutcomes";
import SyllabusOverview from "../../components/ProgramSyllabusOverview/ProgramSyllabusOverview";
import ProjectsShowcase from "../../components/ProjectsShowcase/ProjectsShowcase";
import ToolsTechnologies from "../../components/ProgramToolsTechnologies/ProgramToolsTechnologies";
import TrainerProfile from "../../components/ProgramTrainerProfile/ProgramTrainerProfile";
import KeyBenefits from "../../components/ProgramKeyBenefits/ProgramKeyBenefits";
import AdditionalBenefits from "../../components/ProgramAdditionalBenefits/ProgramAdditionalBenefits";
import FeeStructure from "../../components/ProgramFeeStructure/ProgramFeeStructure";
import HiringPartners from "../../components/ProgramHiringPartners/ProgramHiringPartners";
import SuccessStories from "../../components/ProgramSuccessStories/ProgramSuccessStories";
import CallToActionForm from "../../components/ProgramCallToActionForm/ProgramCallToActionForm";


import { programsData } from "../../Data/ProgramData/ProgramData";

const UIUXDesign = () => {
  const courseId = "ui-ux-design"; 
        const program = programsData[courseId];

  return (
    <div>
        <HeroSection data={program.hero} courseId={courseId} />
      <ProgramOverview data={program.overview} />
      <ProgramOutcomes data={program.outcomes} />
      <SyllabusOverview data={program.syllabus} />
      <ProjectsShowcase data={program.projects} />
      <ToolsTechnologies data={program.tools} />
      <TrainerProfile data={program.trainer} />
      <KeyBenefits data={program.keyBenefits} />
      <AdditionalBenefits data={program.additionalBenefits} />
      <FeeStructure data={program.feeStructure} courseId="ui-ux-design"/>
      <HiringPartners data={program.hiringPartners} />
      <SuccessStories data={program.successStories} />
      <CallToActionForm data={program.cta} />
    </div>
  );
};

export default UIUXDesign;
