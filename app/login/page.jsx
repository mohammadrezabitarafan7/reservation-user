'use client'
import { Button, Divider, Input, InputOtp } from '@heroui/react'
import Steps from '../components/steps'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Bread from '../components/bread'
import useNavigation from '../hooks/useNavigation'
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const [loadingOtp, setLoadingOtp] = useState(false)
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false)
  const [confirmedPhone, setConfirmedPhone] = useState('')
  const phoneNumber = watch('phone', '')
  const isValidPhoneNumber = phoneNumber.match(/^09\d{9}$/)
  const [value, setValue] = useState('')
  const [showOtpInput, setShowOtpInput] = useState(false)
  const { goTo } = useNavigation()
  useEffect(() => {
    if (isPhoneConfirmed) {
      setShowOtpInput(true)
    } else {
      setShowOtpInput(false)
    }
  }, [isPhoneConfirmed])

  const goToPrevStep = () => {
    setIsPhoneConfirmed(prev => {
      if (!prev) {
        goTo('/time')
      }
      return !prev
    })
  }

  const onSubmit = async data => {
    setLoading(true)
    // درخواست به سرور
    if (data.phone) {
      setIsPhoneConfirmed(true)
      setConfirmedPhone(data.phone)
    }
    setLoading(false)
  }
  const confirmSms = () => {
    setLoadingOtp(true)
    goTo('/confirm')
    //  درخواست برای  رمز
    // if (value == 1234) {
    //   alert('صحیح')
    // } else {
    //   alert('ygx')
    // }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='fixed top-0 w-full'>
        <Steps currentStep={2} />
        <Bread />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex p-4 flex-1 gap-3 flex-col relative justify-evenly'
        >
          {!isPhoneConfirmed ? (
            <>
              <input
                maxLength={11}
                type='text'
                inputMode='numeric'
                className='text-base border-1 
                 py-4 bg-transparent text-white
                  w-1/3 mx-auto text-center outline-none p-4 rounded-lg  max-md:w-full'
                placeholder='- 09'
                {...register('phone', { required: true, pattern: /^09\d{9}$/ })}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />

              {errors.phone && (
                <p
                  className='text-myColor text-center text-[12px]'
                  role='alert'
                >
                  شماره موبایل نامعتبر است! (باید 11 رقم باشد و با 09 شروع شود)
                </p>
              )}
            </>
          ) : (
            showOtpInput && (
              <div className='flex flex-col items-center gap-2'>
                <span className='text-white'>
                  کد تایید برای شماره
                  <span className='mx-2'>{confirmedPhone}</span>پیامک شد
                </span>
                <InputOtp
                  // isInvalid={value.length !== 4}
                  errorMessage='کد وارد شده صحیح نیست!' // متن سفارشی برای خطا
                  classNames={{
                    errorMessage:
                      'text-red-500 text-center text-xs font-bold mt-2' // رنگ و استایل پیام خطا
                  }}
                  dir='ltr'
                  textAlign='center'
                  size='md'
                  length={4}
                  value={value}
                  onValueChange={setValue}
                />
              </div>
            )
          )}
        </form>
      </div>

      <div className='mt-6 w-full bottom-0 fixed rounded-tl-[55px] rounded-tr-[55px] shadow-2xl'>
        <Divider className='m-auto bg-gray-300 w-1/2' />
        <div className='flex flex-row w-full justify-center gap-4 px-4 py-6'>
          <Button
            size='lg'
            radius='lg'
            onClick={goToPrevStep}
            className='px-4 py-2 w-full lg:w-1/5 cursor-pointer bg-myColor text-white hover:bg-[#FF7133]'
          >
            قبلی
          </Button>

          {!isPhoneConfirmed ? (
            <Button
              radius='lg'
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
              size='lg'
              onClick={handleSubmit(onSubmit)}
              isLoading={loading}
              isDisabled={!isValidPhoneNumber}
              className={`px-4 py-2 w-full lg:w-1/5 ${
                isValidPhoneNumber
                  ? 'bg-myColor text-white hover:bg-[#FF7133]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              دریافت پیامک
            </Button>
          ) : (
            <Button
              radius='lg'
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
              size='lg'
              onClick={confirmSms}
              isLoading={loadingOtp}
              isDisabled={value.length !== 4}
              className={`px-4 py-2 w-full lg:w-1/5 ${
                value.length === 4
                  ? 'bg-myColor text-white hover:bg-[#FF7133]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              تایید
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
