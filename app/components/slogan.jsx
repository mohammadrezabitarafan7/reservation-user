import { motion } from 'framer-motion'
import { Divider } from '@heroui/react'
const Slogan = () => {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
      <motion.p
        className='text-white text-xs'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
      >
        سریع
      </motion.p>

      {/* Divider */}
      <Divider
        orientation='horizontal'
        className='w-[2px] rounded-full h-4 bg-myColor opacity-50'
      />

      <motion.p
        className='text-white text-xs'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
      >
        هوشمند
      </motion.p>
      <Divider
        orientation='horizontal'
        className='w-[2px] rounded-full h-4 bg-myColor opacity-50'
      />
      <motion.p
        className='text-white text-xs'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
      >
        دقیق
      </motion.p>
    </div>
  )
}
export default Slogan
