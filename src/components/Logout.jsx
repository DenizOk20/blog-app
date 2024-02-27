"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Logout = () => {
  return (
    <Link onClick={signOut} className='p-2' href="/">Logout</Link>
  )
}

export default Logout