import CardList from '@/components/CardList'
import Featured from '@/components/Featured'
import CategoryList from '@/components/categoryList'
import  Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className="">
        <Featured/>       
        <CategoryList/>
        <div>
          <CardList/>
          <Menu/>
        </div>
    </div>
      
  )
}
