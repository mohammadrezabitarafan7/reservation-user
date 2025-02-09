import { motion } from 'framer-motion'
import i3 from '../public/b1.png'
import Image from 'next/image'
const SplashPage = ({ onEnter }) => {
  return (
    <motion.div
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className='flex flex-col items-center justify-center h-screen'
    >
      <div className='flex justify-center items-center'>
        {/* مستطیل شیشه‌ای */}
        <div className='flex flex-col p-14 rounded-xl '>
          <p className='text-white text-xl mb-4 text-center font-bold'>خوش آمدید!</p>
          <Image src={i3} width={300} alt='sp' />
          <button
            onClick={onEnter}
            className='px-6 py-2 bg-[#00668B] text-white rounded-lg text-lg transition-transform hover:scale-105'
          >
            ورود
          </button>
        </div>
      </div>
      <div className='flex flex-row-reverse absolute bottom-2 justify-center py-3 gap-1 mb-1'>
        <span className='text-sm text-default-800 text-center my-auto'>
          © designed by
        </span>
        <svg
          className='my-auto w-3 h-3 text-default-800'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
        </svg>
      </div>    </motion.div>
  )
}

export default SplashPage
