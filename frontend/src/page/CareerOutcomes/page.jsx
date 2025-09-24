import React from 'react'
import CareerHero from '../../components/CareerHero/CareerHero'
import MarketValueStats from '../../components/MarketValueStats/MarketValueStats'
import SalaryInsightsGraph from '../../components/SalaryInsightsGraph/SalaryInsightsGraph'
import HiringCompanies from '../../components/HiringCompanies/HiringCompanies'
import CallSection from '../../components/CallToAction/CallToAction'
const CareerOutcomes = () => {
  return (
    <div>
<CareerHero/>
<MarketValueStats/>
<SalaryInsightsGraph/>
<HiringCompanies/>
<CallSection/>

    </div>
  )
}

export default CareerOutcomes
