'use client'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Divider, InputOtp } from '@heroui/react'
import { StepContext } from '../context/step-context'

const LoginStep = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const { stepData } = useContext(StepContext)

  // دریافت مقدار ورودی شماره موبایل از فرم
  const phoneNumber = watch('phone', '')
  // تابع بررسی صحت شماره موبایل
  const isValidPhoneNumber = phoneNumber.match(/^09\d{9}$/)

  const onSubmit = async data => {
    setLoading(true)
    if (data.phone === '09123456789') {
      // ورود موفق
      setLoading(false)
      console.log(stepData)
    }
  }

  return (
    <div className='flex flex-col  items-center'>
      <div className='flex flex-row gap-3 justify-center shadow-xl border border-[#FF4F00] p-4 rounded-xl'>
        <span className='text-white text-xs'>{stepData.step1}</span>
        <Divider orientation='vertical' className='bg-white w-5 h-px my-auto' />
        <span className='text-white text-xs'>
          {stepData.step2.day}&nbsp;{stepData.step2.date}
        </span>
        <Divider orientation='vertical' className='bg-white w-5 h-px my-auto' />

        <span className='text-white text-xs'>
          {'ساعت '}
          {stepData.step2.time}
        </span>
      </div>

      <div className='m-auto w-full backdrop-blur-sm rounded-md justify-center p-12 flex flex-col z-10 max-md:w-full max-md:p-6'>
        <h1 className='text-center text-sm mb-4 text-[#F5F9FF]'>
          لطفا شماره موبایل خود را وارد نمایید
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-1 gap-3 flex-col relative justify-evenly'
        >
          {/* فیلد شماره موبایل */}
          <input
            maxLength={11}
            type='text'
            inputMode='numeric'
            className='text-base border-1 py-2 bg-transparent text-white w-1/3 m-auto text-end outline-none p-2 rounded-md text-[12px] max-md:w-full'
            placeholder=' - 09 '
            {...register('phone', { required: true, pattern: /^09\d{9}$/ })}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />

          {/* نمایش خطا در صورت نادرست بودن شماره */}
          {errors.phone && (
            <p className='text-[#FF4F00] text-center text-[12px]' role='alert'>
              شماره موبایل نامعتبر است! (باید 11 رقم باشد و با 09 شروع شود)
            </p>
          )}

          {loading && (
            <div className='flex flex-col items-center gap-2'>
              <InputOtp
                dir='ltr'
                textAlign='left'
                size='md'
                length={4}
                value={value}
                onValueChange={setValue}
              />
            </div>
          )}

          {/* دکمه ورود */}
          <Button
            className='text-white bg-[#005EF7] w-1/3 mx-auto max-md:w-full'
            type='submit'
            radius='sm'
            isLoading={loading}
            isDisabled={!isValidPhoneNumber}
            spinner={
              <svg
                className='animate-spin h-5 w-5 text-current'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
                <path
                  className='opacity-75'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  fill='currentColor'
                />
              </svg>
            }
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginStep
