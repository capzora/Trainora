import React from "react";
import DataScienceHeroSection from "../../components/DSHeroSection/DSHeroSection";
import DSProgramOverview from "../../components/DSProgramOverview/DSProgramOverview";
import DSProgramOutcomes from "../../components/DSProgramOutcomes/DSProgramOutcomes";
import DSSyllabusOverview from "../../components/DSSyllabusOverview/DSSyllabusOverview";
import DSProjectsShowcase from "../../components/DSProjectsShowcase/DSProjectsShowcase";
import DSToolsTechnologies from "../../components/DSToolsTechnologies/DSToolsTechnologies";
import TrainerProfile from "../../components/TrainerProfile/TrainerProfile";
import KeyBenefits from "../../components/KeyBenefits/KeyBenefits";
import AdditionalBenefits from "../../components/AdditionalBenefits/AdditionalBenefits";
import FeeStructure from "../../components/FeeStructure/FeeStructure";
import HiringPartners from "../../components/HiringPartners/HiringPartners";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import CallToAction from "../../components/CallToAction/CallToAction";

const DataScience = () => {
  return (
    <div>
      <DataScienceHeroSection />
      <DSProgramOverview />
      <DSProgramOutcomes />
      <DSSyllabusOverview/>
      <DSProjectsShowcase/>
      <DSToolsTechnologies/>
      <TrainerProfile/>
      <KeyBenefits/>
      <AdditionalBenefits/>
      <FeeStructure/>
      <HiringPartners/>
      <SuccessStories/>
      <CallToAction/>


    </div>
  );
};

export default DataScience;
