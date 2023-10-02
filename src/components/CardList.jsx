import Pagination from '@/components/Pagination'
import React from 'react'
import Cart from './card/Cart'

const CardList = () => {
  return (
    <div className='lg:w-2/3 p-4 md:py-2 md:p-0'>
      <h1 className='py-4 font-bold text-xl'>Recent Posts</h1>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList