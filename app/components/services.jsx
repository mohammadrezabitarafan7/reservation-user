import { useContext, useState } from 'react'
import { cn } from '@heroui/react'
import { StepContext } from '../context/step-context'
import Steps from './steps.jsx'
import { Button, Divider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Loading from './loading'

export const datesArray = [
  { key: '1', label: 'اصلاح سر' },
  { key: '2', label: 'فشیال پوست' },
  { key: '3', label: 'سولار' },
  { key: '4', label: 'پکیج داماد' },
  { key: '5', label: 'پکیج داماد' },
  { key: '6', label: 'پکیج داماد' }
]

export default function App () {
  const { updateStepData } = useContext(StepContext)
  const [selectedCard, setSelectedCard] = useState(null)
  const router = useRouter()
  const[loading,setLoading]=useState(true)

  const handleCardSelect = index => {
    setSelectedCard(index)
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === '') {
      handleCardSelect(index)
    }
  }

  const goToNextStep = () => {
    if (selectedCard !== null) {
      updateStepData('step1', datesArray[selectedCard].label)
      alert(datesArray[selectedCard].label)
      router.push('/time')
    }
  }

  return loading ? (
    <div className='flex flex-col items-center'>
      <div className='fixed top-0 w-full'>
        <Steps currentStep={0} />
        <div className='flex flex-wrap justify-center gap-3 w-full p-4'>
          {datesArray.map((date, index) => (
            <div
              key={date.key}
              role='checkbox'
              aria-checked={selectedCard === index}
              tabIndex={0}
              onClick={() => handleCardSelect(index)}
              onKeyDown={e => handleKeyDown(e, index)}
              className={cn(
                'flex flex-col items-center justify-center',
                'cursor-pointer rounded-3xl shadow-lg gap-4 p-1 border-2 border-default-400',
                selectedCard === index && 'bg-myColor border-myColor',
                'w-[100px] h-[100px]',
                'max-md:w-[90px] max-md:h-[90px]'
              )}
            >
              <span
                className={cn(
                  'text-xs my-auto flex justify-center items-center leading-relaxed text-default-400 font-bold',
                  selectedCard === index && 'text-textColor'
                )}
              >
                {date.label}
              </span>
            </div>
          ))}
        </div>
      </div>
  
      {/* دکمه‌ها */}
      <div className='mt-6 w-full bottom-0 fixed rounded-tl-[55px] rounded-tr-[55px] shadow-2xl'>
        <Divider className='m-auto bg-gray-300 w-1/2' />
        <div className='flex flex-row w-full justify-center gap-4 px-4 py-6'>
          <Button
            size='lg'
            radius='lg'
            disabled={true}
            className={`px-4 py-2 w-full lg:w-1/5 bg-[#626262] text-white cursor-not-allowed`}
          >
            خوش آمدید
          </Button>
          <Button
            radius='lg'
            size='lg'
            onClick={goToNextStep}
            className={`px-4 py-2 w-full lg:w-1/5 ${
              selectedCard !== null
                ? 'bg-myColor text-textColor hover:bg-[#FF7133]'
                : 'bg-btnColor text-default-300 cursor-not-allowed'
            }`}
            disabled={selectedCard === null}
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
  
  
  
}
