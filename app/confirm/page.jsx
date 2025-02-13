'use client'
import { Button } from '@heroui/react'
import Bread from '../components/bread'
import useNavigation from '../hooks/useNavigation'
import { useContext } from 'react'
import { StepContext } from '../context/step-context'
import logo from '../public/justlogo.png'
import Image from 'next/image'

const Confirm = () => {
  const { goTo } = useNavigation()
  const { removeData } = useContext(StepContext)
  const click = () => {
    removeData()
    goTo('/')
  }
  return (
    <div className='min-h-screen flex flex-col  gap-3 items-center justify-center overflow-hidden'>
      <Image className='p-4' src={logo} width={100} />
      <span className='text-white text-xs font-bold'>وقت شما در تاریخ :</span>
      <Bread />
      <span className='text-white text-xs font-bold'>ثبت شد.</span>
      <div className='flex flex-col gap-4 mt-5'>
        <span className='text-white text-xs'>لطفا منتظر پیام تایید باشید</span>
        <Button
          size='sm'
          radius='sm'
          className='bg-myColor text-white'
          onClick={click}
        >
          خانه
        </Button>
      </div>
    </div>
  )
}

export default Confirm
