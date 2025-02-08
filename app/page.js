'use client'
import { useState } from 'react'
import SplashPage from './components/splash-page.jsx'
import Services from './components/services.jsx'

const Home = () => {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash  ? (
        <SplashPage onEnter={() => setShowSplash(false)} />
      ) : (
        <Services />
      )}
    </>
  )
}

export default Home
