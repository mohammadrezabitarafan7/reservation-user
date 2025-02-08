import {
  CheckIcon,
  ScissorsIcon,
  ClockIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Steps = ({ currentStep }) => { 
  const steps = [
    { title: 'خدمات', icon: ScissorsIcon },
    { title: 'زمان', icon: ClockIcon },
    { title: 'ثبت نام', icon: DevicePhoneMobileIcon }
  ]

  return (
    <div
      className='flex items-center w-full justify-evenly p-3 
         border border-white/30 bg-white/10 backdrop-blur-2xl
         rounded-bl-[70px]  rounded-br-[70px] shadow-[0_4px_30px_rgba(255,255,255,0.1)]'
    >
      {steps.map((step, index) => (
        <div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
          className='flex flex-col items-center gap-2 w-24 h-28 justify-center'
        >
          {/* دایره آیکون */}
          <div
            initial={{ scale: 0.8 }}
            animate={{ scale: currentStep === index ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className={`h-12 w-12 flex items-center justify-center rounded-full shadow-md ${
              currentStep >= index ? 'bg-myColor text-white' : 'bg-gray-300 text-default-400'
            }`}
          >
            {currentStep > index ? (
              <CheckIcon className='h-5 w-5' />
            ) : (
              <step.icon className='h-5 w-5' />
            )}
          </div>

          {/* عنوان استپ */}
          <h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className={`text-xs text-center break-words font-bold ${
              currentStep >= index ? 'text-myColor' : 'text-default-400'
            }`}
          >
            {step.title}
          </h1>
        </div>
      ))}
    </div>
  )
}

export default Steps
