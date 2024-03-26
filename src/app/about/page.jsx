import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const aboutPage = () => {
  return (
    <div className='flex flex-col p-4 md:px-20 xl:px-40'>
        <div className='flex flex-col h-[calc(90vh-3rem)] lg:h-[calc(60vh-3rem)] gap-3 lg:flex-row lg:gap-5'>
            <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg h-[calc(50vh-3rem)]'>
                <Image alt='denizok' src="/p1.jpeg" fill className='rounded-md object-cover'/>
            </div>
            <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='font-bold text-3xl py-4 font-mono lg:text-5xl'>{"Hey, I'm Deniz"}</h1>
                <p className='font-semibold py-1 md:text-xl'>Frontend Developer from Turkey</p>
                <span className='font-normal md:font-medium'>I wanted to develop a blog website, so here it is. People can share amazing stories with others! You should join us.</span>
            </div>
        </div>
            <div className='flex flex-col gap-4 relative'>
                <h1 className='font-bold font-mono text-xl py-2'>Why should you be here ?</h1>
                <div className='flex flex-col gap-2'>
                    <span className='font-medium p-2 bg-slate-400 rounded-md hover:bg-slate-500 md:max-w-md'>You can easily find your interests.</span>
                    <span className='font-medium p-2 bg-slate-400 rounded-md hover:bg-slate-500 md:max-w-md'>You can share your stories with people.</span>
                    <span className='font-medium p-2 bg-slate-400 rounded-md hover:bg-slate-500 md:max-w-md'>You can learn new things from others.</span>
                    <span className='font-medium p-2 bg-slate-400 rounded-md hover:bg-slate-500 md:max-w-md'>{"and there's this blog to do many more things."}</span>
                </div>
                <Link href="/login" className='py-3 mt-2 font-medium bg-red-600 w-[150px] text-center rounded-md self-center md:self-start'>Login and Start</Link>
                <div className='hidden md:block absolute w-[350px] h-[350px] top-[-40px] right-10 rotate-3'>
                    <Image alt='thanks' src="/p1.jpeg" fill className='object-cover w-full h-full'/>
                </div>
            </div>
    </div>
  )
}

export default aboutPage