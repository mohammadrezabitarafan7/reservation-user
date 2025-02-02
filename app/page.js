'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Stepper from './components/test.jsx'
import StepProvider from './context/step-provider'
import SplashPage from './components/splash-page.jsx' // ایمپورت اسپلش پیج

const Home = () => {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <div className='flex flex-col gap-5 h-screen relative'>
      {showSplash ? (
        <SplashPage onEnter={() => setShowSplash(false)} />
      ) : (
        <StepProvider>
          <Stepper />
        </StepProvider>
      )}
    </div>
  )
}

export default Home
