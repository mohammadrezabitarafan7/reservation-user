'use client'
import { useContext } from 'react'
import { StepContext } from '../context/step-context'
import { Divider } from '@heroui/react'

const Bread = () => {
  const { stepData } = useContext(StepContext)

  return (
    <div className='flex justify-center items-center p-4'>
      <div className='inline-flex flex-row gap-3 justify-center border-b border-myColor  p-4 rounded-sm'>
        <span className='text-white text-xs'>{stepData.step1}</span>
        <Divider
          orientation='vertical'
          className='bg-[#00668B] w-5 h-[2px] rounded-full my-auto'
        />
        <span className='text-white text-xs'>
          {stepData.step2.day}&nbsp;{stepData.step2.date}
        </span>
        <Divider
          s
          orientation='vertical'
          className='bg-[#00668B] w-5 h-[2px] rounded-full  my-auto'
        />
        <span className='text-white text-xs'>
          {'ساعت '}
          {stepData.step2.time}
        </span>
      </div>
    </div>
  )
}
export default Bread
