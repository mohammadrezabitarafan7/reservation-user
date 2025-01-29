'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon, ScissorsIcon,ClockIcon ,DevicePhoneMobileIcon} from '@heroicons/react/24/outline'
import CheckBox from '../components/check-box'
import { Button, Divider } from "@heroui/react"
import Services from './services'

const Stepper = () => {
  // const steps = ['ثبت ناخدمات', 'زمان', 'م']

  const steps = [
    {
      title: 'خدمات',
      icon: ScissorsIcon
    },
    {
      title: 'زمان',
      icon: ClockIcon
    },
    {
      title: 'ثبت نام',
      icon: DevicePhoneMobileIcon
    },
  ]
  const [currentStep, setCurrentStep] = useState(0)

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  return (
    <div className='flex flex-col items-center'>
      {/* Stepper UI */}
      <div className='flex items-center justify-between w-full max-w-full p-6 bg-white rounded-md shadow-xl'>
        {steps.map((step, index) => (
          <div key={index} className='flex items-center'>
            {/* Circle */}
            <div className='flex flex-row gap-2 max-md:flex-col'>
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-full ${
                  currentStep >= index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {currentStep > index ? (
                  <CheckIcon className='h-5 w-5' />
                ) : (
                  <step.icon className='h-5 w-5' />
                )}
              </div>
              <h1
                className={` flex items-center justify-center rounded-full ${
                  currentStep >= index ? 'text-blue-500 ' : ' text-black'
                }`}
              >
                {step.title}
              </h1>
            </div>
            {/* Line */}

            {/* {index < steps.length - 1 && (

              <div className='flex  justify-center items-center'>
                <div
                  className={`h-1 flex-grow justify-center w-32  m-auto rounded-lg ${
                    currentStep > index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                
                ></div>
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        className='mt-6 w-full'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.4 }}
      >
        {currentStep === 0 && (

          <Services/>
        )}
        {currentStep === 1 && <CheckBox  goToNextStep={goToNextStep}  />}
        {currentStep === 2 && (
          <p className='text-lg font-medium'>This is Step 2!</p>
        )}
      </motion.div>

      {/* Buttons */}
      <div className='mt-6 flex gap-4 absolute bottom-6'>
        <Button
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${
            currentStep === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
        قبلی
        </Button>
        <Button
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length - 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          بعدی
        </Button>
      </div>
    </div>
  )
}

export default Stepper
