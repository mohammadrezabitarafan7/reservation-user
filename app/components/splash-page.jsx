import { motion } from 'framer-motion'
import i3 from '../public/Barber-cuate.png'
import Image from 'next/image'
const SplashPage = ({ onEnter }) => {
  return (
    <motion.div
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0c0c0c]  to-[#1a1a1a]'
    >
      <div className='flex justify-center items-center'>
        {/* مستطیل شیشه‌ای */}
        <div className='flex flex-col p-14 rounded-xl '>
          <p className='text-white text-xl mb-4 text-center'>خوش آمدید!</p>
          <Image src={i3} width={300} alt='sp' />
          <button
            onClick={onEnter}
            className='px-6 py-2 bg-[#FF4F00] text-white rounded-lg text-lg transition-transform hover:scale-105'
          >
            ورود
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default SplashPage
