import Image from 'next/image'
import React from 'react'

const Cart = ({key,item}) => {
  return (
    <div className='h-[70vh] lg:h-[40vh] flex flex-col lg:flex-row gap-4 lg:gap-8' key={key}>
        <div className='relative h-[40%] md:h-[100%] w-full'>
            <Image src="/p1.jpeg" alt='' fill className='object-cover'/>
        </div>

        <div className='flex flex-col justify-between gap-8'>
            <div className='flex gap-2 w-full'>
                <span>11.11.2023 -</span>
                <span className='text-red-400'>Culture</span>
            </div>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ullam!</p>
            <button className='text-left py-2 underline underline-offset-2 decoration-red-400'>Read More</button>
        </div>
    </div>
  )
}

export default Cart