import React from 'react'
import CareerHero from '../../components/CareerHero/CareerHero'
import MarketValueStats from '../../components/MarketValueStats/MarketValueStats'
import SalaryInsightsGraph from '../../components/SalaryInsightsGraph/SalaryInsightsGraph'
import HiringCompanies from '../../components/HiringCompanies/HiringCompanies'
import CallToActionForm from '../../forms/CallToActionForm/CallToActionForm'

const CareerOutcomes = () => {
  return (
    <div>
<CareerHero/>
<MarketValueStats/>
<SalaryInsightsGraph/>
<HiringCompanies/>
<CallToActionForm/>

    </div>
  )
}

export default CareerOutcomes
