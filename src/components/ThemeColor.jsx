"use client"
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const ThemeColor = () => {
    const {theme,toggle} = useContext(ThemeContext)
  return (
    <div onClick={toggle} className={`p-1 rounded-xl bg-black w-8 h-5 flex items-center justify-between relative
    ${theme === 'dark' ? 'bg-[#ddd]': 'bg-[#0f172a]'}`}>
        <Image alt='moon' src="/moon.png" width={10} height={10}/>
        <div className={`w-3 h-3 bg-white rounded-xl absolute ${theme === 'dark' ? `right-1 bg-[#0f172a]` : `left-1 bg-[#ddd]`}`}></div>
        <Image alt='light' src="/sun.png" width={10} height={10}/>
    </div>
  )
}

export default ThemeColor