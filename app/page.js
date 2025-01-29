'use client'
import Stepper from './components/test.jsx'
import StepProvider from './context/step-provider'

const Home = () => {
  return (
    <div className='flex flex-col gap-5  h-screen relative '>
      <div className=' flex-col hidden '>
        <h1 className='text-center text-white text-3xl pb-3'>On Time Sho !</h1>

        <div className='w-full max-w-[90%] sm:max-w-[40rem] mx-auto relative '>
          {/* Gradients */}
          <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#fd693c] to-transparent h-[1px] sm:h-[2px] w-3/4 blur-sm max-md:w-1/4' />
          <div className='absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#fd693c] to-transparent h-px w-3/4 max-md:w-1/4' />
          <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#fd693c] to-transparent h-[3px] sm:h-[5px] w-1/4 blur-sm max-md:w-3/4' />
          <div className='absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#fd693c] to-transparent h-px w-1/4 max-md:w-3/4' />
        </div>
      </div>

      <StepProvider>
        
        <Stepper />
      </StepProvider>
    </div>
  )
}
export default Home
