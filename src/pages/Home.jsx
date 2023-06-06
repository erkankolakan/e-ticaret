import React, { useContext, useState } from 'react'
import SliderComp from "../components/home/SliderComp"
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import DenemeContext from '../Deneme'

const Home = () => {

  const [sort, setSort] = useState('')
  const [category, setCategory] = useState("")

  const {isim , fonksiyon1} = useContext(DenemeContext);
  console.log(isim); //bu kısım useContext ile sayfalar arası erişimi sağlar



  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
