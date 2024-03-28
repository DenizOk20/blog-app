"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const ContactPage = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }
        setError("")
        const mailtoLink = `mailto:deniz.okk2019@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply%20To:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;

    }

  return (
    <div className='p-4 md:px-20 xl:px-40 flex flex-col gap-5'>
        <h1 className='font-mono font-bold text-2xl text-center py-1 md:justify-center'>Contact Us</h1>
        <div className='flex flex-col lg:flex-row lg:gap-6'>
            <div className='flex flex-col'>
                <div className='flex md:justify-center xl:w-[500px] xl:h-[400px]'>
                    <Image alt='customerservice' src="/customer.jpg" width={300} height={150} className='rounded-lg sm:w-[400px] sm:h-[300px] lg:w-full lg:h-full object-cover xl:w-[100%]'/>
                </div>
            </div>
            <form action="#" onSubmit={handleSubmit} className='flex flex-col py-4 gap-4 md:self-center lg:gap-6 xl:gap-8 xl:w-[400px] xl:items-end'>
                <div className='flex flex-row'>
                    <label htmlFor="name" className='min-w-[64px] md:min-w-[96px] md:text-xl'>Name</label>
                    <input placeholder='Type your name' type="text" id="name" value={name} className='border-2 outline-none px-2' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-row'>
                    <label htmlFor="email" className='min-w-[64px] md:min-w-[96px] md:text-xl'>Email</label>
                    <input placeholder='Type your email' type="email" id="email" value={email} className='border-2 outline-none px-2' onChange={(e) => {
                        setEmail(e.target.value);   
                    }}/>
                </div>
                <div className='flex flex-row'>
                    <label htmlFor="message" className='min-w-[64px] md:min-w-[96px] md:text-xl'>Message</label>
                    <textarea placeholder='Tell us something' name="message" id="message" cols="30" rows="5" className='outline-none border-2 w-[200px] xl:h-[154px] px-2' onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className='self-center sm:self-start md:self-end'>
                    <button type='submit' className='p-2 self-center bg-green-600 text-white hover:text-black rounded-md font-semibold'>Send Message</button>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
            </form>
        </div>
    </div>
  )
}

export default ContactPage