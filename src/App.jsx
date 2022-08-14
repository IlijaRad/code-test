import { useState } from 'react'
import IncomeTaxForm from './components/IncomeTaxForm'
import IncomeTaxTable from './components/IncomeTaxTable'
import Wrapper from './components/Wrapper'

const App = () => {
  const [step, setStep] = useState(1)
  const [totalIncome, setTotalIncome] = useState(0)
  const [incomeType, setIncomeType] = useState('gross')
  const [incomePeriod, setIncomePeriod] = useState('annually')

  const handleSelectIncomeType = (e) => {
    setIncomeType(e.target.value)
  }

  const prevStep = () => {
    setStep((step) => step - 1)
  }

  const nextStep = () => {
    setStep((step) => step + 1)
  }

  switch (step) {
    case 1:
      return (
        <Wrapper>
          <IncomeTaxForm
            totalIncome={totalIncome}
            setTotalIncome={setTotalIncome}
            incomePeriod={incomePeriod}
            setIncomePeriod={setIncomePeriod}
            incomeType={incomeType}
            handleSelectIncomeType={handleSelectIncomeType}
            nextStep={nextStep}
          />
        </Wrapper>
      )
    case 2:
      return (
        <Wrapper>
          <IncomeTaxTable
            totalIncome={totalIncome / 100}
            incomeType={incomeType}
            incomePeriod={incomePeriod}
            setIncomePeriod={setIncomePeriod}
            prevStep={prevStep}
          />
        </Wrapper>
      )
    default:
      return <div>Something went wrong</div>
  }
}

export default App
