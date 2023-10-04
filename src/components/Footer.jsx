import social from '@/datas/data'
import footer from '@/datas/footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 md:px-20 xl:px-40 md:flex md:py-3 lg:pt-10 md:items-center'>
      <div className='flex flex-col text-center md:w-2/3 md:gap-8'>
        <div className='flex items-center justify-center md:justify-start'>
          <Image alt='logo' src="/navLogo.png" width={64} height={64} className='h-12 w-12 rounded-full'/>
          <h1 className='p-4 font-bold'>denizblog</h1>
        </div>
        <p className='font-light md:text-left md:pr-10'>Siz de denizblog ile heyecanınızı insanlarla paylaşabilirsiniz. İnsanlarla bir şeyler paylaşın ya da eğlenceli hiakyeleri okuyun.</p>
        <div className='flex p-3 justify-center md:justify-start md:p-0 md:gap-5'>
            { social.map(item => (
                <Link key={item.id} href={item.url} className='px-2 md:p-0'>
                    <Image alt='' src={item.img} width={20} height={20} className=''/>
                </Link>
            ))}
        </div>
      </div>
      <div className='flex justify-center items-center text-center gap-7 p-4 flex-wrap md:w-1/3 md:gap-14'>
        {footer.map(item => (
          <div key={item.id} className='flex flex-col gap-3'>
            <h1 className='font-bold'>{item.title}</h1>
            {
              item.links.map(link => (
                <Link key={link} href="/" className='flex flex-col'>{link}</Link>
              ))
            }
        </div>
        ))}
      </div>
    </div>
  )
}

export default Footer