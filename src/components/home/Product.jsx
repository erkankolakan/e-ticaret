import React from 'react'
import Products from './Products'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();

  return (
    <div>
        <div  onClick=  {() => navigate(`products/${product?.id}`)} className='w-[440px]  p-3 mb-2 mx-2 border rounded-md relative cursor-pointer'>
            <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-gray-400 text-white p-1 m-1'> {product.price} <span className='text-sm'>TL</span> </div>
            <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt='image' />
            <div className='text-center px-3 mt-4'> {product?.title} </div>
        </div>
    </div>
  )
}

export default Product
