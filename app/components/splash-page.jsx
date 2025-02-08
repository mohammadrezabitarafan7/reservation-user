import { motion } from 'framer-motion'
import i3 from '../public/Barber-cuate.png'
import Image from 'next/image'
const SplashPage = ({ onEnter }) => {
  return (
    <motion.div
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#1A2D42] via-[#1A2D42]  to-[#5C6B73]'
    >
      <div className='flex justify-center items-center'>
        {/* مستطیل شیشه‌ای */}
        <div className='flex flex-col p-14 rounded-xl '>
          <p className='text-white text-xl mb-4 text-center font-bold'>خوش آمدید!</p>
          <Image src={i3} width={300} alt='sp' />
          <button
            onClick={onEnter}
            className='px-6 py-2 bg-myColor text-white rounded-lg text-lg transition-transform hover:scale-105'
          >
            ورود
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default SplashPage
