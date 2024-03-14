import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const blogPage = ({searchParams}) => {

  const page = parseInt(searchParams) || 1
  const {cat} = searchParams

  return (
    <div className='p-4 md:px-20 xl:px-40 flex flex-col gap-5'>
        <h1 className='bg-red-400 text-white w-full p-3 text-center font-bold'>{cat} Blog</h1>
        <div className='lg:flex'>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}

export default blogPage