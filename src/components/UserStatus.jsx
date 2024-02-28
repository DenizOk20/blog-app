"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'
import Logout from './Logout';

const UserStatus = () => {
    const {status} = useSession();
  return (
    <div className='hidden md:flex items-center'>
        <Link className='p-2' href="/">Home</Link>
        <Link className='p-2' href="/contact">Contact</Link>
        <Link className='p-2' href="/about">About</Link>
        {status === "unauthenticated" ? (
            <Link className='p-2' href="/login">Login</Link>
        ) :
        (
        <div className='flex'>
            <Link className='p-2' href="/write">Write</Link>
            <Logout/>
        </div>
        )}
    </div>
  )
}

export default UserStatus