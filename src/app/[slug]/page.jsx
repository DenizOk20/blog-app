import Menu from '@/components/Menu'
import ReadMore from '@/components/ReadMore'
import Image from 'next/image'
import React from 'react'

const singlePage = () => {
  return (
    <div className='p-4 md:px-20 xl:px-40 flex flex-col'>
        <div className='h-[80vh] md:h-[50vh] lg:h-[45vh] flex flex-col gap-7 md:flex-row'>
            <div className='flex flex-col h-1/3 md:h-full md:w-1/2 lg:w-1/2 gap-4 md:justify-between'>
                <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>Lorem tempora obcaecati, animi voluptatem.</h1>
                <div className='flex items-center gap-2'>
                    <Image alt='' src="/p1.jpeg" width={64} height={64} className='w-12 h-12 rounded-full'/>
                    <div>
                        <p>Mehmet Fatih</p>
                        <span className='font-light'>25 April 2023</span>
                    </div>
                </div>
            </div>
            <div className='relative h-2/3 w-full md:h-full lg:w-1/2'>
                <Image alt='' src="/p1.jpeg" fill className='w-full rounded-md object-cover'/>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row pt-10'>
            <div className='flex flex-col gap-8 lg:w-1/2 p-4'>
                <ReadMore className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nam corrupti unde, explicabo, quia eum rem, aliquam 
                    ipsa harum saepe repellendus placeat. Dolores eum, suscipit delectus ullam totam aut quod?
                Nobis tempora cumque obcaecati nemo autem perspiciatis doloremque repellendus asperiores animi?
                 Iure rem amet officia quo adipisci eaque iusto dignissimos debitis voluptates exercitationem atque vero sed totam 
                 veritatis, itaque tempore.
                Autem dolor, enim modi repellendus id earum atque amet minima doloribus aliquid fugit excepturi corporis laborum
                 similique expedita perspiciatis ex cupiditate blanditiis soluta repudiandae dignissimos commodi, vitae est deserunt!
                  Est.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt minus ex, ullam quis laudantium porro facilis
                 delectus voluptatum praesentium ipsum quod placeat aliquid, cupiditate fuga rerum aperiam? Ratione, numquam inventore?
                Ut sunt, molestias minima libero nulla harum nostrum eos quam tenetur labore! Placeat aliquid atque iusto cupiditate,
                 ratione doloribus necessitatibus aut, voluptates, facere delectus eveniet maiores. Consectetur veritatis repudiandae nemo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quisquam rerum consectetur quod culpa, tempora officiis 
                libero voluptate sequi, natus quia, totam dignissimos est atque accusantium quos voluptas aspernatur vitae.
                Neque dolorem, magnam, illum mollitia, quis expedita cum quod sint atque explicabo repellendus ipsa doloremque obcaecati
                 quasi tempora dicta aperiam. Odit quasi nesciunt at distinctio itaque rem minima temporibus quae.
                 </ReadMore>
                 <div className=''>
                    <h2 className='font-bold pt-3'>Comments</h2>
                    <div className='flex gap-5 pt-3'>
                        <input type="text" name="" id="" className='border-2 focus:outline-none px-2 w-2/3'/>
                        <button className='bg-green-700 text-white px-3 py-1 rounded-md'>Share</button>
                    </div>
                 </div>
            </div>
                <Menu/>
        </div>
    </div>
  )
}

export default singlePage