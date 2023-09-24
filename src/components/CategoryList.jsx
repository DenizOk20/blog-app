import categories from '@/datas/categories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='flex flex-col xs:h-[70vh] p-4 md:h-[30vh] items-center md:items-start gap-4 md:px-20 xl:px-40'>
      <h1 className='text-xl font-bold xl:py-4'>Popular Categories</h1>
      <div className='flex md:flex-row flex-wrap gap-5 md:gap-8 lg:gap-10'>
        { categories.map(cat => (
          <Link key={cat.id} href={`/blog?cat=${cat.title}`} className={`flex items-center gap-4 md:gap-2 p-4 rounded-md`}
          style={{backgroundColor: cat.bg}}>
             <Image alt='category' src={cat.img} width={36} height={36} className='object-cover rounded-full h-9 w-9'/>
              <p className='font-bold text-black'>{cat.title}</p>
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryList