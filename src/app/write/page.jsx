"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

const WritePage = () => {

    const [open,setOpen] = useState(false)
    const [value,setValue] = useState("")

    const router = useRouter();

    const {status} = useSession()
    console.log(status)

    if(status === "loading"){
        return <div>Loading...</div>
    }
    if (status=== "unauthenticated"){
        router.push('/')
    }


  return (
    <div className='p-4 md:px-20 xl:px-40 flex flex-col gap-4 md:gap-6'>
        <input type="text" placeholder='Title' className='p-7 outline-none text-3xl md:text-4xl lg:text-5xl bg-transparent border-none placeholder:text-[#b3b3b1]'/>
        <div className='flex gap-3 md:gap-5 flex-col relative'>
            <button onClick={()=> setOpen(!open)} className='flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-gray-700'>
                <Image src="/plus.png" alt='add' width={16} height={16} className='w-4 h-4'/>
            </button>
            {open && (
                <div className='absolute flex gap-3 left-12 z-50 w-full'>
                <button className='flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]'>
                    <Image src="/image.png" alt='add' width={16} height={16}/>
                </button >
                <button className='flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]'>
                    <Image src="/external.png" alt='add' width={16} height={16}/>
                </button>
                <button className='flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]'>
                    <Image src="/video.png" alt='add' width={16} height={16}/>
                </button>
                </div>
            )}
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' 
                className='w-full'/>
            <button className='fixed top-12 right-1 bg-[#317a2d] px-3 py-2 rounded-md text-white border-none cursor-pointer'>Publish</button>
        </div>
    </div>
  )
}

export default WritePage