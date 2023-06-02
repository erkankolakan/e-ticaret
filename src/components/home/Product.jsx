import React from 'react'
import Products from './Products'

const Product = ({product}) => {
  return (
    <div>
        <div className='w-[400px] p-2 m-2 border rounded-md relative'>
            <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-1 m-1'> {product.price} <span className='text-sm'>TL</span> </div>
            <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt='image' />
        </div>
    </div>
  )
}

export default Product
