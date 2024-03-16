import Comments from '@/components/Comments'
import Menu from '@/components/Menu'
import ReadMore from '@/components/ReadMore'
import Image from 'next/image'
import React from 'react'

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`)

    if(!res.ok){
        throw new Error("failed")
    }
    
    return res.json()
}


const singlePage = async ({params}) => {

    const {slug} = params

    const data = await getData(slug)
    console.log(data?.user)
  return (
        <div className='p-4 md:px-20 xl:px-40 flex flex-col'>
        <div className='h-[80vh] md:h-[50vh] lg:h-[45vh] flex flex-col gap-7 md:flex-row'>
            <div className='flex flex-col h-1/3 md:h-full md:w-1/2 lg:w-1/2 gap-4 md:justify-between'>
                <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>{data.title}</h1>
                <div className='flex items-center gap-2'>
                    <Image alt='' src={`${data?.user?.image}`} width={64} height={64} className='w-12 h-12 rounded-full'/>
                    <div>
                        <p>{data?.user?.name}</p>
                        <span className='font-light'>{data?.createdAt.substring(0,10)}</span>
                    </div>
                </div>
            </div>
            {data?.img && <div className='relative h-2/3 w-full md:h-full lg:w-1/2'>
                <Image alt='' src="/p1.jpeg" fill className='w-full rounded-md object-cover'/>
            </div>}
        </div>
        <div className='flex flex-col lg:flex-row pt-10'>
            <div className='flex flex-col gap-8 lg:w-1/2 p-4'>
                <div dangerouslySetInnerHTML={{__html:data?.desc}}>

                </div>
                 <div className=''>
                    <Comments postSlug={slug}/>
                 </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default singlePage