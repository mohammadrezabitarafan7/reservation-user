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
import { Button } from '@heroui/react'
import Services from './services'
import { StepContext } from '../context/step-context'
import LoginStep from './login'
import Bread from './bread'

const Stepper = () => {
  const steps = [
    {
      title: 'انتخاب نوع خدمات',
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
    // بررسی اطلاعات مرحله جاری
    if (!stepData[`step${currentStep + 1}`]) {
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
    <div className='flex flex-col  gap-3 items-center '>
      {/* Stepper UI */}
      <div
        className='flex items-center w-[100%] justify-evenly p-3  border border-white bg-[#F5F9FF] 
         rounded-bl-[55px] shadow-2xl  
      rounded-br-[55px]  max-md:w-full'
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }} // انیمیشن ورودی
            animate={{ opacity: 1, scale: 1, y: 0 }} // حالت نهایی
            transition={{
              duration: 0.5,
              delay: index * 0.2, // تأخیر برای هر آیتم
              type: 'spring'
            }}
            className='flex flex-col items-center gap-2  w-24 h-28 justify-center'
          >
            {/* Circle */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === index ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className={`h-12 w-12 flex items-center justify-center rounded-full ${
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
      
      <div className='mt-6   w-full absolute bottom-0 rounded-tl-[55px] rounded-tr-[55px] shadow-2xl '>
      <div className='w-full max-w-[90%] sm:max-w-[40rem] mx-auto relative '>
          {/* Gradients */}
          <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FF7133] to-transparent h-[1px] sm:h-[2px] w-3/4 blur-sm max-md:w-1/4' />
          <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FF7133] to-transparent h-px w-3/4 max-md:w-1/4' />
          <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF7133] to-transparent h-[3px] sm:h-[5px] w-1/4 blur-sm max-md:w-3/4' />
          <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF7133] to-transparent h-px w-1/4 max-md:w-3/4' />
        </div>
     
        <div className='flex flex-row justify-center gap-4 px-4 py-6 '>
          <Button
            size='lg'
            radius='full'
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
            className={`px-4 py-2  ${
              currentStep === 0
                ? 'bg-gray-300   cursor-not-allowed'
                : 'bg-[#FF4F00] text-white hover:bg-[#FF7133]'
            }`}
          >
            قبلی
          </Button>
          <Button
            radius='full'
            size='lg'
            onClick={goToNextStep}
            className={`px-4 py-2  ${
              currentStep === steps.length - 1
                ? 'hidden' // اگر مرحله آخر باشد، پنهان می‌شود
                : !stepData[`step${currentStep + 1}`]
                ? 'bg-gray-300  cursor-not-allowed'
                : 'bg-[#FF4F00] text-white hover:bg-[#E54500]'
            }`}
            disabled={!stepData[`step${currentStep + 1}`]} // دکمه فقط زمانی فعال است که اطلاعات مرحله جاری وجود داشته باشد
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Stepper
