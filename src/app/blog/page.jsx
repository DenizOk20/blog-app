import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const blogPage = () => {
  return (
    <div className='p-4 md:px-20 xl:px-40 flex flex-col gap-5'>
        <h1 className='bg-red-500 text-white w-full p-3 text-center font-bold'>Style Blog</h1>
        <div className='lg:flex'>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default blogPage