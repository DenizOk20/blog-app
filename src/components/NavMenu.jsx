"use client"
import social from '@/datas/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import ThemeColor from './ThemeColor'
import { signOut, useSession } from 'next-auth/react'

const NavMenu = () => {
    const {status} = useSession()
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
      setOpen(false)
      signOut()
    }

    return (
      <div className='flex gap-3'>
        <ThemeColor/>
         {open ? 
            <Image src="/close.png" alt='menu' width={20} height={20} className='cursor-pointer' onClick={() => setOpen(false)}/>
            : 
            <Image src="/menu.png" alt='menu' width={20} height={20} className='cursor-pointer' onClick={() => setOpen(true)}/>
        }
        {open &&  <div className='absolute left-0 bottom-0 w-full h-[calc(100vh-3rem)] bg-neutral-400 flex flex-col
         p-10 gap-3'>
            <div className='flex flex-row p-3 justify-center gap-3'>
              { social.map(item => (
                  <Link key={item.id} href={item.url} className=''>
                      <Image alt='' src={item.img} width={25} height={25}/>
                  </Link>
              ))
              }
          </div>
            <div className='flex flex-col text-center gap-8'>
              <Link onClick={() => setOpen(false)} className='text-xl font-bold text-fuchsia-100' href="/">Home</Link>
              <Link onClick={() => setOpen(false)} className='text-xl font-bold text-fuchsia-100' href="/">Contact</Link>
              <Link onClick={() => setOpen(false)} className='text-xl font-bold text-fuchsia-100' href="/">About</Link>
              {status === "unauthenticated" ? (<Link onClick={() => setOpen(false)} className='text-xl font-bold text-fuchsia-100' href="/login">Login</Link>) :
             ( <div className='flex flex-col gap-8'>
                    <Link onClick={() => setOpen(false)} className='text-xl font-bold text-fuchsia-100' href="/write">Write</Link>
                    <Link onClick={handleLogout} className='text-xl font-bold text-fuchsia-100' href="/" >Logout</Link>
                </div>) 
                } 
            </div>
          </div>}
      </div>
    )
}

export default NavMenu