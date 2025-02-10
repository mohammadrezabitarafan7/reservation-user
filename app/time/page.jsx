'use client'
import { Button, Divider } from '@heroui/react'
import Steps from '../components/steps'
import { useContext, useState } from 'react'
import CheckBox from '../components/check-box'
import useNavigation from '../hooks/useNavigation'

import { StepContext } from '../context/step-context'

const DateTime = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [loadingBtn, setLoadingBtn] = useState(false)

  const { goTo } = useNavigation()
  const { updateStepData } = useContext(StepContext)

  // دریافت داده‌ها از کامپوننت  (CheckBox)
  const handleDataFromChild = (day, time) => {
    setSelectedDay(day)
    setSelectedTime(time)
  }

  // رفتن به مرحله بعدی
  const goToNextStep = () => {
    // alert(
    //   `${selectedDay?.date || 'روز انتخاب نشده'} - ${
    //     selectedTime || 'زمان انتخاب نشده'
    //   }`
    // )
    setLoadingBtn(true)
    updateStepData('step2', {
      day: selectedDay.day,
      date: selectedDay.date,
      time: selectedTime
    })
    goTo('/login')
  }

  // رفتن به مرحله قبلی
  const goToPrevStep = () => {
    goTo('/')
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='fixed top-0 w-full'>
        <Steps currentStep={1} />{' '}
        {/* فرض بر این است که Steps کامپوننتی برای نمایش مراحل باشد */}
        <CheckBox sendDataToParent={handleDataFromChild} />{' '}
        {/* فرض بر این است که CheckBox داده‌ها را ارسال می‌کند */}
      </div>
      <div className='mt-6 w-full bottom-0 fixed rounded-tl-[55px] rounded-tr-[55px] shadow-2xl'>
        <Divider className='m-auto bg-gray-300 w-1/2' />
        <div className='flex flex-row w-full justify-center gap-4 px-4 py-6'>
          <Button
            size='lg'
            radius='lg'
            onClick={goToPrevStep}
            className={`px-4 py-2 w-full lg:w-1/5 cursor-pointer bg-myColor text-white hover:bg-[#FF7133]`}
          >
            قبلی
          </Button>
          <Button
            radius='lg'
            size='lg'
            isLoading={loadingBtn}
            onClick={goToNextStep}
            className={`px-4 py-2 w-full lg:w-1/5 ${
              selectedTime !== null
                ? 'bg-myColor text-white hover:bg-[#FF7133]'
                : 'bg-btnColor text-default-300 cursor-not-allowed'
            }`}
            disabled={selectedTime === null}
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DateTime
