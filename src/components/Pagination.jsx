"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page,hasPrev,hasNext}) => {

  const router = useRouter()


  return (
    <div className='flex items-center justify-between pt-5'>
      <button className='text-white bg-red-500 px-3 py-2 disabled:cursor-not-allowed disabled:bg-red-800'
        onClick={() => router.push(`?page=${page-1}`)}
        disabled={!hasPrev}>Previous</button>
      <button className='text-white bg-red-500 px-3 py-2 disabled:cursor-not-allowed disabled:bg-red-800'
       onClick={() => router.push(`?page=${page+1}`)} 
       disabled={!hasNext}>Next</button>
    </div>
  )
}

export default Pagination