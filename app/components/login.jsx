'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, InputOtp } from '@heroui/react'

const LoginStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const onSubmit = async data => {
    setLoading(true)
    // شرط تست
    if (data.phone === '123' && data.password === '123') {
      // toast.success('ورود موفقیت آمیز بود!')
      // Cookies.set('token', 'TOKEN', { expires: 2 });
      setLoading(false)
    }
  
  }
  return (
    <div className='flex flex-col  '>
      <div className='m-auto w-full  backdrop-blur-sm  rounded-md justify-center p-12 flex flex-col z-10 max-md:w-full max-md:p-6'>
        <h1 className='text-center  text-sm mb-4 text-[#F5F9FF]'>
          لطفا شماره موبایل خود را وارد نمایید
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-1 gap-3 flex-col justify-evenly'
        >
          <input
            type='text'
            className=' border-1 py-2 bg-transparent text-white w-1/3 m-auto text-end outline-none p-2 rounded-md text-[12px] max-md:w-full'
            placeholder=' - 09 '
            {...register('phone', { required: true })}
            aria-invalid={errors.price ? 'true' : 'false'}
          />

          {errors.phone?.type === 'required' && (
            <p className='text-[#FF4F00] text-center text-[12px] ' role='alert'>
              لطفا شماره خود را وارد کنید
            </p>
          )}

          {loading && (
            <div className='flex flex-col items-center gap-2'>
              <InputOtp
                dir='ltr' // جهت وارد کردن متن از چپ به راست
                textAlign='left'
                size='md'
                length={4}
                value={value}
                onValueChange={setValue}
              />
            </div>
          )}
          <Button
            color='primary'
            className=' text-white w-1/3 mx-auto max-md:w-full'
            type='submit'
            radius='sm'
            isLoading={loading}
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
