import React, { useContext, useEffect, useState } from 'react'
import { Button, cn } from '@heroui/react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { StepContext } from '../context/step-context'

export default function App () {
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const { updateStepData } = useContext(StepContext)

  // آرایه روزها و تاریخ‌ها
  const datesArray = [
    { day: 'شنبه', date: '11/11' },
    { day: 'یکشنبه', date: '11/12' },
    { day: 'دوشنبه', date: '11/13' },
    { day: 'سه‌شنبه', date: '11/14' }
  ]

  // آرایه زمان‌های مرتبط با هر روز
  const times = [
    { id: 0, time: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: 1, time: [10, 11, 15, 16, 17, 18, 19, 20] },
    { id: 2, time: [10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { id: 3, time: [10, 11, 12, 13, 14] }
  ]

  const handleCardSelect = index => {
    setSelectedCard(index)
    setSelectedTime(null) // ریست زمان انتخاب‌شده
  }

  const handleTimeSelect = time => {
    setSelectedTime(time) // تنظیم زمان انتخاب‌شده
  }

  useEffect(() => {
    // بررسی انتخاب روز و زمان
    if (selectedCard !== null && selectedTime !== null) {
      // alert(`روز: ${datesArray[selectedCard].day} - زمان: ${selectedTime}`)

      updateStepData('step2', selectedTime)
    }
  }, [selectedCard, selectedTime]) // اجرا زمانی که selectedCard یا selectedTime تغییر کند

  return (
    <div className='flex flex-col p-4 flex-1 justify-center gap-6 max-md:'>
      {/* کارت‌های روز */}
      <div className='flex flex-wrap gap-4 justify-center max-md:grid max-md:grid-cols-4'>
        {datesArray.map((date, index) => (
          <div
            key={index}
            role='checkbox'
            aria-checked={selectedCard === index}
            tabIndex={0}
            onClick={() => handleCardSelect(index)}
            className={cn(
              'flex flex-col items-center justify-center',
              'cursor-pointer rounded-3xl shadow-lg gap-4 p-1 border-2 border-default-400',
              selectedCard === index && 'bg-[#FF4F00] border-[#FF4F00]',
              'w-[100px] h-[100px]',
              'max-md:w-[90px] max-md:h-[90px]'
            )}
          >
            <div className='flex flex-col p-4 text-center gap-3'>
              <span
                className={cn(
                  'text-xs text-default-400 font-bold  p-1 ',
                  selectedCard === index && 'text-white '
                )}
              >
                {date.day}
              </span>
              <span
                className={cn(
                  'text-xs text-default-400 font-bold  ',
                  selectedCard === index && 'text-white '
                )}
              >
                {date.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* نمایش زمان‌های مرتبط */}
      {selectedCard !== null && (
        <div className='flex flex-row flex-wrap justify-center gap-2'>
          {times[selectedCard]?.time.map((t, index) => (
            <div
              key={index}
              onClick={() => handleTimeSelect(t)}
              className={cn(
                'bg-white/50 backdrop-blur-2xl px-3 py-1 rounded-md text-sm cursor-pointer',
                selectedTime === t && 'bg-[#005EF7] text-white' // زمان انتخاب‌شده را برجسته کن
              )}
            >
              <div className='flex flex-row gap-3 justify-start'>
                <ClockIcon className='w-5 h-5 my-auto' />
                <span className='my-auto'> {`: ${t}`}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
