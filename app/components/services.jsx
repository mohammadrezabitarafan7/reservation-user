import { useContext, useState } from 'react'
import { Select, SelectItem } from '@heroui/react'
import { StepContext } from '../context/step-context'

export const animals = [
  { key: '1', label: 'اصلاح سر' },
  { key: '2', label: 'اصلاح صورت و ریش' },
  { key: '3', label: 'فشیال پوست' },
  { key: '4', label: 'سولار' },
  { key: '5', label: 'پکیج داماد' }
]

export default function App () {
  const [selectedKey, setSelectedKey] = useState(null) // کلید انتخاب شده
  const { updateStepData } = useContext(StepContext)

  const handleSelectionChange = key => {
    setSelectedKey(key)
    updateStepData('step1', key)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-center text-medium text-[#F5F9FF] '>
        لطفاً نوع خدمات خود را انتخاب کنید
      </h1>

      {/* Select Dropdown */}
      <Select
        radius='sm'
        variant='flat'
        className='max-w-xs m-auto  '
        items={animals}
        labelPlacement='outside'
        onSelectionChange={handleSelectionChange} // مدیریت تغییر انتخاب
        value={selectedKey} // تعیین مقدار پیش‌فرض
      >
        {animal => (
          <SelectItem key={animal.key} value={animal.key}>
            {animal.label}
          </SelectItem>
        )}
      </Select>

      {/* نمایش مقدار انتخاب‌شده */}
      {/* {selectedKey ? (
        <div className='text-center text-sm mt-4'>
          انتخاب شما: <span className='font-bold'>{selectedKey}</span>
        </div>
      ) : (
        <div className='text-center text-sm mt-4 text-gray-500'>
          لطفاً یک گزینه انتخاب کنید
        </div>
      )} */}
    </div>
  )
}
