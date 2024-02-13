import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Comments = () => {
    const status = "authenticated"
  return (
    <div>
        <h2 className='font-bold pt-3'>Comments</h2>
        {status === "authenticated" ? 
        (<div className='flex flex-row gap-3 pt-2'>
            <textarea placeholder='Write something..' className='px-2 border-2 focus:outline-none w-2/3 md:w-4/5'></textarea>
            <button className='bg-green-700 text-white px-3 py-1 rounded-md max-h-12'>Share</button>
        </div>)
        :
        (<Link href="/login">Login to write a comment</Link>)
        }
        <div className='pt-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <Image src="/p1.jpeg" alt='profile-photo' width={50} height={50} className='w-12 h-12 rounded-full object-cover'/>
                    <div className='flex flex-col text-gray-600'>
                        <span className='font-medium'>Deniz Ök</span>
                        <span className='text-sm'>13.02.2024</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, obcaecati! lor</p>
            </div>
        </div>
        <div className='pt-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <Image src="/p1.jpeg" alt='profile-photo' width={50} height={50} className='w-12 h-12 rounded-full object-cover'/>
                    <div className='flex flex-col text-gray-600'>
                        <span className='font-medium'>Deniz Ök</span>
                        <span className='text-sm'>13.02.2024</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, obcaecati! lor</p>
            </div>
        </div>
        <div className='pt-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <Image src="/p1.jpeg" alt='profile-photo' width={50} height={50} className='w-12 h-12 rounded-full object-cover'/>
                    <div className='flex flex-col text-gray-600'>
                        <span className='font-medium'>Deniz Ök</span>
                        <span className='text-sm'>13.02.2024</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, obcaecati! lor</p>
            </div>
        </div>
    </div>
  )
}

export default Comments