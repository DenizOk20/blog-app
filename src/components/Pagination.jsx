import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between pt-5'>
      <button className='text-white bg-red-500 px-3 py-2'>Previous</button>
      <button className='text-white bg-red-500 px-3 py-2'>Next</button>
    </div>
  )
}

export default Pagination