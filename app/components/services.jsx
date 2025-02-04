import { useContext, useState } from 'react'
import { Select, SelectItem, cn } from '@heroui/react'
import { StepContext } from '../context/step-context'

export const datesArray = [
  { key: '1', label: 'اصلاح سر' },
  { key: '2', label: 'فشیال پوست' },
  { key: '3', label: 'سولار' },
  { key: '4', label: 'پکیج داماد' }
]

export default function App () {
  const { updateStepData } = useContext(StepContext)
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardSelect = index => {
    setSelectedCard(index)
    updateStepData('step1', datesArray[index].label)
    // alert(datesArray[index].label)
  }

  return (
    <div className='flex p-4 flex-wrap gap-3 justify-center max-md:grid max-md:grid-cols-4 max-md:place-items-center'>
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
          <span
            className={cn(
              'text-xs my-auto flex justify-center items-center leading-relaxed text-default-400 font-bold',
              selectedCard === index && 'text-white'
            )}
          >
            {date.label}
          </span>
        </div>
      ))}
    </div>
  )
}
