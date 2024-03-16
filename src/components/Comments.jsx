"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const Comments = ({postSlug}) => {

    const fetcher = async (url) => {
        const res = await fetch(url)

        const data = await res.json()

        if(!res.ok){
            const error = new Error(data.message)
            throw error
        }

        return data
    }

    const {status} = useSession()
    console.log(status)
    const {data,isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,
     fetcher)
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

        {isLoading ? "Loading..." : data.map(item => (  
            <div key={item._id} className='pt-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    {item?.user?.image && <Image src={item.user.image} alt='profile-photo' width={50} height={50} className='w-12 h-12 rounded-full object-cover'/>}
                    <div className='flex flex-col text-gray-600'>
                        <span className='font-medium'>{item.user.name}</span>
                        <span className='text-sm'>{item.createdAt.substring(0,10)}</span>
                    </div>
                </div>
                <p>{item.desc}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Comments