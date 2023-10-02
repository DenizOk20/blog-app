
import categories from '@/datas/categories'
import popular from '@/datas/mostPopular'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Menu = () => {
  
  return (
    <div className='lg:w-1/3 p-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-600 font-bold text-sm'>{"What's hot"}</span>
          <h2 className='font-bold text-xl'>Most Popular</h2>
        </div>
        <div className='flex flex-col gap-4'>
          {popular.map(item => (
            <Link key={item.id} href="/" className='flex flex-col gap-2'>
              <span className='p-3 rounded-md max-w-[80px] text-center first-letter:uppercase font-bold text-black' style={{background: item.color}}>{item.title}</span>
              <p className='font-medium'>{item.desc}</p>
              <span className='text-sm'>{item.author} - {item.date}</span>
            </Link>
          ))}
        
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-600 font-bold text-sm'>{"Discover by topic"}</span>
          <h2 className='font-bold text-xl'>Categories</h2>
        </div>
        <div className='flex flex-wrap gap-1'>
          {categories.map(cat => (
            <Link className='p-3 min-w-[80px] text-center font-medium first-letter:uppercase text-black' style={{background:cat.bg}} key={cat.id} href="/">{cat.title}</Link>
          ))}
        </div>
      </div>
        
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-600 font-bold text-sm'>{"Chosing by editor"}</span>
          <h2 className='font-bold text-xl'>Editors Pick</h2>
        </div>
        <div>
            {popular.map(item => (
              <Link href="/" key={item.id} className='flex'>
                <div className='flex items-center'>
                  <Image alt='' src={item.img} className='rounded-full h-14 w-14' width={64} height={64}/>
                </div>
                <div className='flex flex-col w-[80%] p-3 gap-1'>
                  <span className='p-1 max-w-[80px] rounded-md text-center font-medium first-letter:uppercase text-black' style={{background:item.color}}>{item.title}</span>
                  <p className='text-sm'>{item.desc}</p>
                  <span className='text-sm' >{item.author} - {item.date}</span>
                </div>
              </Link>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Menu