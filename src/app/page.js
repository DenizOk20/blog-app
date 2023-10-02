import CardList from '@/components/CardList'
import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import  Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className="">
        <Featured/>       
        <CategoryList/>
        <div className='flex flex-col lg:flex-row gap-12 md:px-20 xl:px-40'>
          <CardList/>
          <Menu/>
        </div>
    </div>
      
  )
}
