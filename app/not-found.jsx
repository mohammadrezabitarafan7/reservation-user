'use client'
import Image from 'next/image'
import not from './public/404.png'
import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
export default function NotFound () {
  const router = useRouter()
  return (
    <div className='h-screen flex flex-col gap-1 justify-center items-center'>
      <Image src={not} width={350} />
      <h1 className='text-myColor'>صفحه پیدا نشد !</h1>
      <p className='text-myColor'>
        متاسفیم صفحه‌ای که به دنبال آن بودید وجود ندارد .
      </p>
      <Button
        onClick={() => router.replace('/')}
        className='mt-4 bg-[#00668B]'
        size='sm'
        color='primary'
        radius='sm'
        variant='solid'
      >
        صفحه اصلی
      </Button>
    </div>
  )
}
