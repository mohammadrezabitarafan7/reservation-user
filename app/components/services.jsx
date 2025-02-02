import { useContext, useState } from 'react'
import { Select, SelectItem, cn } from '@heroui/react'
import { StepContext } from '../context/step-context'

export const datesArray = [
  { key: '1', label: 'اصلاح سر' },
  { key: '3', label: 'فشیال پوست' },
  { key: '4', label: 'سولار' },
  { key: '5', label: 'پکیج داماد' },
  { key: '6', label: 'پکیج بیبی' }
]

export default function App () {
  const [selectedKey, setSelectedKey] = useState(null) // کلید انتخاب شده
  const { updateStepData } = useContext(StepContext)
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardSelect = index => {
    setSelectedCard(index)
    updateStepData('step1', index)
  }

  return (
    // <div className='flex flex-col gap-4'>
    //   <h1 className='text-center text-medium text-[#F5F9FF] '>
    //     لطفاً نوع خدمات خود را انتخاب کنید
    //   </h1>

    //   {/* Select Dropdown */}
    //   <Select
    //     radius='sm'
    //     variant='flat'
    //     className='max-w-xs m-auto  '
    //     items={animals}
    //     labelPlacement='outside'
    //     onSelectionChange={handleSelectionChange} // مدیریت تغییر انتخاب
    //     value={selectedKey} // تعیین مقدار پیش‌فرض
    //   >
    //     {animal => (
    //       <SelectItem key={animal.key} value={animal.key}>
    //         {animal.label}
    //       </SelectItem>
    //     )}
    //   </Select>

    //   {/* نمایش مقدار انتخاب‌شده */}
    //   {/* {selectedKey ? (
    //     <div className='text-center text-sm mt-4'>
    //       انتخاب شما: <span className='font-bold'>{selectedKey}</span>
    //     </div>
    //   ) : (
    //     <div className='text-center text-sm mt-4 text-gray-500'>
    //       لطفاً یک گزینه انتخاب کنید
    //     </div>
    //   )} */}
    // </div>

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
