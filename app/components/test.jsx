'use client'
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckIcon,
  ScissorsIcon,
  ClockIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import CheckBox from '../components/check-box'
import { Button, Divider } from '@heroui/react'
import Services from './services'
import { StepContext } from '../context/step-context'
import LoginStep from './login'

const Stepper = () => {
  const steps = [
    {
      title: 'نوع خدمات',
      icon: ScissorsIcon
    },
    {
      title: 'تعیین زمان',
      icon: ClockIcon
    },
    {
      title: 'ثبت نهایی',
      icon: DevicePhoneMobileIcon
    }
  ]

  const [currentStep, setCurrentStep] = useState(0)
  const { stepData } = useContext(StepContext)
  const goToNextStep = () => {
    const nextStepKey = `step${currentStep + 1}`
    const nextStepData = stepData[nextStepKey]

    // بررسی مقدار فیلدهای داخلی برای `step2`
    if (
      !nextStepData ||
      (typeof nextStepData === 'object' &&
        Object.values(nextStepData).some(value => !value)) // بررسی مقدار همه فیلدها
    ) {
      setError('لطفاً اطلاعات این مرحله را تکمیل کنید.')
      return // مانع رفتن به مرحله بعدی شوید
    }

    // رفتن به مرحله بعد
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  return (
    <div className='flex flex-col gap-3 items-center '>
      {/* Stepper UI */}
      <div
        className='flex items-center w-full justify-evenly p-3  
             border border-white/30 bg-white/10 backdrop-blur-2xl
             rounded-bl-[70px] rounded-br-[70px] shadow-[0_4px_30px_rgba(255,255,255,0.1)] 
             max-md:w-full'
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
            className='flex flex-col items-center gap-2 w-24 h-28 justify-center'
          >
            {/* Circle */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === index ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className={`h-12 w-12 flex items-center justify-center rounded-full shadow-md ${
                currentStep >= index
                  ? 'bg-[#FF4F00] text-white'
                  : 'bg-gray-300 text-default-400'
              }`}
            >
              {currentStep > index ? (
                <CheckIcon className='h-5 w-5' />
              ) : (
                <step.icon className='h-5 w-5' />
              )}
            </motion.div>

            {/* Text */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className={`text-xs text-center break-words font-bold ${
                currentStep >= index ? 'text-[#FF4F00]' : 'text-default-400'
              }`}
            >
              {step.title}
            </motion.h1>
          </motion.div>
        ))}
      </div>

      {/* <div>{stepData.step1}dddddd</div>
      <div>{stepData.step2}</div> */}

      {/* Step Content */}
      <div
        key={currentStep}
        className='mt-6 w-full overflow-hidden'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.4 }}
      >
        {currentStep === 0 && <Services />}
        {currentStep === 1 && <CheckBox />}
        {currentStep === 2 && <LoginStep />}
      </div>

      {/* Buttons */}

      <div className='mt-6 w-full  bottom-0 fixed rounded-tl-[55px] rounded-tr-[55px] shadow-2xl '>
        <Divider className=' m-auto bg-gray-300 w-1/2' />

        <div className='flex flex-row w-full justify-center gap-4 px-4 py-6  '>
          <Button
            size='lg'
            radius='lg'
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
            className={`px-4 py-2  w-full lg:w-1/5 ${
              currentStep === 0
                ? 'hidden'
                : 'bg-[#FF4F00] text-white hover:bg-[#FF7133]'
            }`}
          >
            قبلی
          </Button>
          <Button
            radius='lg'
            size='lg'
            onClick={goToNextStep}
            className={`px-4 py-2 w-full lg:w-1/5 ${
              currentStep === steps.length - 1
                ? 'hidden'
                : !stepData[`step${currentStep + 1}`] ||
                  (typeof stepData[`step${currentStep + 1}`] === 'object' &&
                    Object.values(stepData[`step${currentStep + 1}`]).some(
                      value => !value
                    ))
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#FF4F00] text-white hover:bg-[#E54500]'
            }`}
            disabled={
              !stepData[`step${currentStep + 1}`] ||
              (typeof stepData[`step${currentStep + 1}`] === 'object' &&
                Object.values(stepData[`step${currentStep + 1}`]).some(
                  value => !value
                ))
            }
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepper
