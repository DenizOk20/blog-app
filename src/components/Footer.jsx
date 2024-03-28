"use client"
import social from '@/datas/data'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import categories from '@/datas/categories'



const Footer = () => {
  const {status} = useSession()

  return (
    <div className='p-4 md:px-20 xl:px-40 md:flex md:py-3 lg:pt-10 md:items-center'>
      <div className='flex flex-col text-center md:w-2/3 md:gap-8'>
        <div className='flex items-center justify-center md:justify-start'>
          <Image alt='logo' src="/navLogo.png" width={64} height={64} className='h-12 w-12 rounded-full'/>
          <h1 className='p-4 font-bold'>denizblog</h1>
        </div>
        <p className='font-light md:text-left md:pr-10'>With denizblog you can share your excitement with people. Share something with people or read fun stories.</p>
        <div className='flex p-3 justify-center md:justify-start md:p-0 md:gap-5'>
            { social.map(item => (
                <Link key={item.id} href={item.url} className='px-2 md:p-0'>
                    <Image alt='' src={item.img} width={20} height={20} className=''/>
                </Link>
            ))}
        </div>
      </div>
      <div className='flex justify-center items-center text-center gap-7 p-4 flex-wrap md:w-1/3 md:gap-14'>
        
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>Links</h1>
              <Link href="/" className='flex flex-col'>Home</Link>
              <Link href="/about" className='flex flex-col'>About</Link>
              <Link href="/contact" className='flex flex-col'>Contact</Link>
              {status === "unauthenticated" ? 
                <Link href="/login" className='flex flex-col'>Login</Link> : 
                <Link onClick={signOut} href="/" className='flex flex-col'>Logout</Link>
              }
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>Tags</h1>
            {categories.slice(0,4).map(cat => (
              <Link key={cat.id} href={`/blog?cat=${cat.title}`}>{cat.title}</Link>
            ))}
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>Social</h1>
              <Link href="https://www.instagram.com/denizok1812/" className='flex flex-col'>Instagram</Link>
              <Link href="https://www.linkedin.com/in/deniz-%C3%B6k-9410a323a/" className='flex flex-col'>Linkedln</Link>
              <Link href="https://github.com/DenizOk20" className='flex flex-col'>Github</Link>
              <Link href="https://twitter.com/Denizokk2" className='flex flex-col'>Twitter</Link> 
        </div>
      </div>
    </div>
  )
}

export default Footer