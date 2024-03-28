import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const getData = async (slug) => {
  const popularPosts = await prisma.post.findFirst({
    where: {slug},
    orderBy: {
      views: "desc",
    },
    include: { user: true },
    take: 1,
  });
  return popularPosts;
};


const Featured = async ({params}) => {

  const slug = params 
  const data = await getData(slug)
  return (
    <div className='h-[calc(100vh-3rem)] md:px-20 xl:px-40 flex flex-col justify-between p-4 gap-3 md:gap-5 xl:gap-8'>
      <h1 className='text-2xl md:text-5xl xl:text-7xl'>
        <b>Hey, Welcome to denizblog!</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex flex-col justify-around md:flex-row flex-1 gap-3 xl:gap-6'>
      <div className='relative w-full h-[40%] md:h-[100%] xl:h-[100%]'>
        {data. img && <Image src={data.img} alt='popularpost' fill className='object-cover xl:rounded-md'/>}
      </div>

      <div className='w-full flex flex-col gap-3 md:justify-center md:h-[100%] xl:h-[100%] xl:gap-5'>
          <h2 className='font-bold text-xl md:text-3xl xl:text-4xl'>{data.title}</h2>
          <p className='md:text-xl'>{data.desc}</p>
          <Link href={`/posts/${data.slug}`} className='bg-[#5b5b5b] p-3 rounded-md cursor-pointer text-white max-w-[130px] text-center'>Read more</Link>
      </div>
      </div>
    </div>
  )
}

export default Featured