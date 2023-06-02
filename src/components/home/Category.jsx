import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';



const Category = () => {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)


    useEffect(()=> {
        dispatch(getCategories())
    },[dispatch]) 


  return (
    <div className='w-1/6 bg-gray-100 p-5 '>
        <div className='border-b pb-1 text-xl font-bold'>
            KATEGORİ
        </div>
        {
            categories?.map((category,i) => (
                <div className='text-lg hover:bg-gray-200 p-2 cursor-pointer' key={i}>{category}</div>
            ))
        }
    </div>
  )
}

export default Category
