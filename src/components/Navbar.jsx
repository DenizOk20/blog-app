import social from '@/datas/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavMenu from './NavMenu'
import ThemeColor from './ThemeColor'
import { signOut } from 'next-auth/react'
import Logout from './Logout'
import UserStatus from './UserStatus'

const Navbar = () => {
    const user = "true"
  return (
    <div className='h-12 flex p-4 justify-between items-center md:px-20 xl:px-40 border-b-2 border-b-fuchsia-100'>
        <div className='hidden md:flex p-2'>
            { social.map(item => (
                <Link key={item.id} href={item.url} className='p-2'>
                    <Image alt='' src={item.img} width={20} height={20}/>
                </Link>
            ))
            }
        </div>
        <div>
            <Link className='text-xl font-bold' href="/">denizblog</Link>
        </div>

        <div className='hidden md:flex items-center'>
            <ThemeColor/>
            <UserStatus/>
        </div>
        <div className='md:hidden z-20'>
            <NavMenu/>
        </div>
    </div>
  )
}

export default Navbar