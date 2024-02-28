"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {

  const router = useRouter();

  const {data,status} = useSession()
  console.log(data,status)

  if(status === "loading"){
    return <div>Loading...</div>
  }
  if (status=== "authenticated"){
    router.push('/')
  }

  return (
    <div className='flex items-center justify-center p-4 mt-5 md:px-20 xl:px-40 lg:mt-10 xl:mt-[84px]'>
        <div className='bg-[#a3b0da] p-10 flex md:w-[80%] lg:w-[50%] flex-col items-center justify-center gap-12 rounded-md text-white'>
            <div onClick={() => signIn("google")} className='bg-[#ff5555] text-center p-2 lg:p-3 cursor-pointer rounded-md font-bold min-w-[190px] lg:min-w-[200px]'>Sign in with Google</div>
            <div className='bg-[#111] text-center p-2 lg:p-3 cursor-pointer rounded-md font-bold min-w-[190px] lg:min-w-[200px]'>Sign in with Github</div>
            <div className='bg-[#087BEA] text-center p-2 lg:p-3 cursor-pointer rounded-md font-bold min-w-[190px] lg:min-w-[200px]'>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage