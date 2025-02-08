import React, { useState } from 'react';
import { cn } from '@heroui/react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function App({ sendDataToParent }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // آرایه روزها و تاریخ‌ها
  const datesArray = [
    { day: 'شنبه', date: '11/11' },
    { day: 'یکشنبه', date: '11/12' },
    { day: 'دوشنبه', date: '11/13' },
    { day: 'سه‌شنبه', date: '11/14' },
    { day: 'چهارشنبه', date: '11/15' },
    { day: 'پنج‌شنبه', date: '11/16' },
    { day: 'جمعه', date: '11/17' }
  ];

  // آرایه زمان‌های مرتبط با هر روز
  const times = [
    { id: 0, time: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: 1, time: [10, 11, 15, 16, 17, 18, 19, 20] },
    { id: 2, time: [10, 11, 12, 13, 14, 15, 16, 17, 18] },
    { id: 3, time: [10, 11, 12, 13, 14] },
    { id: 4, time: [8, 9, 10, 11, 14, 15, 18, 19] },
    { id: 5, time: [9, 10, 11, 12, 16, 17, 18, 19] },
    { id: 6, time: [10, 12, 14, 16, 18, 20] }
  ];

  const handleCardSelect = (index) => {
    setSelectedCard(index);
    setSelectedTime(null); // ریست زمان انتخاب‌شده
    sendDataToParent(datesArray[index], null); // ارسال روز انتخاب‌شده به والد
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedCard !== null) {
      sendDataToParent(datesArray[selectedCard], time); // ارسال روز و زمان به والد
    }
  };

  return (
    <div className='flex flex-col p-4 gap-4'>
      {/* کارت‌های روز */}
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {datesArray.map((date, index) => (
          <div
            key={index}
            role="checkbox"
            aria-checked={selectedCard === index}
            tabIndex={0}
            onClick={() => handleCardSelect(index)}
            className={cn(
              'flex flex-col items-center justify-center cursor-pointer',
              'rounded-3xl shadow-lg gap-2 p-2 border-2 border-default-400',
              selectedCard === index && 'bg-[#FF4F00] border-[#FF4F00]',
              'w-[100px] h-[100px] max-md:w-[90px] max-md:h-[90px]'
            )}
          >
            <div className="flex flex-col text-center">
              <span className={cn('text-sm font-bold', selectedCard === index ? 'text-white' : 'text-default-400')}>
                {date.day}
              </span>
              <span className={cn('text-sm font-bold', selectedCard === index ? 'text-white' : 'text-default-400')}>
                {date.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* نمایش زمان‌های مرتبط */}
      {selectedCard !== null && (
        <div className="flex flex-wrap justify-center gap-2">
          {times[selectedCard]?.time.map((t, index) => (
            <div
              key={index}
              onClick={() => handleTimeSelect(t)}
              className={cn(
                'bg-white/70 backdrop-blur-2xl px-3 py-1 rounded-md text-sm cursor-pointer',
                selectedTime === t && 'bg-[#005EF7] text-white'
              )}
            >
              <div className="flex flex-row gap-3">
                <ClockIcon className="w-5 h-5 my-auto" />
                <span className="my-auto">{`: ${t}`}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
