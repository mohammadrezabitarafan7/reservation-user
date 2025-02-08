'use client'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StepContext } from './step-context'

const COOKIE_KEY = 'stepData'
const initialData = { step1: '', step2: { day: '', date: '', time: '' } }

const StepProvider = ({ children }) => {
  const [stepData, setStepData] = useState(initialData)

  // خواندن مقدار از کوکی بعد از لود شدن کلاینت
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedData = Cookies.get(COOKIE_KEY)
        if (savedData) {
          setStepData(JSON.parse(savedData))
        }
      } catch (error) {
        console.error('Error parsing cookie:', error)
        Cookies.remove(COOKIE_KEY) // اگر مقدار خراب بود، حذفش کن
      }
    }
  }, [])

  // به‌روزرسانی داده‌ها و ذخیره در کوکی
  const updateStepData = (step, data) => {
    setStepData(prevData => {
      const updatedData = {
        ...prevData,
        [step]: typeof data === 'object' ? { ...prevData[step], ...data } : data
      }
      Cookies.set(COOKIE_KEY, JSON.stringify(updatedData), { expires: 900 / 86400 })
      return updatedData
    })
  }
  // پاک کردن
  const removeData = () => {
    Cookies.remove(COOKIE_KEY)
  }
  return (
    <StepContext.Provider value={{ stepData, updateStepData, removeData }}>
      {children}
    </StepContext.Provider>
  )
}
export default StepProvider
