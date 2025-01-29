'use client'
import { useState } from 'react'
import { StepContext } from './step-context'

const StepProvider = ({ children }) => {

  const [stepData, setStepData] = useState({ step1: '', step2: '', step3: '' })

  const updateStepData = (step, data) => {
    setStepData(prevData => ({
      ...prevData,
      [step]: data
    }))
  }


  return (
    <StepContext.Provider value={{  stepData, updateStepData}}>
      {children}
    </StepContext.Provider>
  )
}
export default StepProvider
