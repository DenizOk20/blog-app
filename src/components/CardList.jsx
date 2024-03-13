import Pagination from '@/components/Pagination'
import React from 'react'
import Cart from './card/Cart'

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store"
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json();
}

const CardList = async ({page}) => {

  const {posts,count} = await getData(page);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page -1) > 0 
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className='lg:w-2/3 p-4 md:py-2 md:p-0'>
      <h1 className='py-4 font-bold text-xl'>Recent Posts</h1>
      <div className='flex flex-col gap-4 lg:gap-8'>
        {posts?.map(item => (
          <Cart key={item._id} item={item}/>
          ))
        }
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList