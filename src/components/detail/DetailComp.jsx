import React, { useState } from 'react'

const DetailComp = ({productDetail}) => {
  console.log(productDetail,"bomb")
  const [quantity, setQuantity] = useState(0)


  const decrement = () => {
    setQuantity(quantity - 1 )
    if(quantity==0)   setQuantity(0)
  }

  const  increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1) 
    setQuantity(quantity + 1 )
  }

  const addBasket = ()  => {
    
  }




  return (
    <div className='flex gap-10 my-10'>
      <img className='w-[500px] h-[500px] '  src={productDetail?.image} alt='resim'/>
        <div className=''>
            <div className='text-4xl font-bold'> {productDetail?.title} </div>
            <div className='my-2 text-xl'>{productDetail?.description}</div>
            <div className='my-2 text-xl text-red-500 '>Rating  : {productDetail?.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500 '>Count  : {productDetail?.rating?.count}</div>
              <div className='text-4xl font-bold'>Price  : {productDetail?.price} TL</div>
                <div className='flex items-center gap-5 my-4 '>
                  <div onClick={decrement} className='text-2xl cursor-pointer'>-</div>
                    <input className='w-[50px] text-center text-3xl font-bold' value="text" value={quantity} />
                  <div onClick={increment} className='text-2xl cursor-pointer'>+</div>
                </div>
            <div onClick={addBasket} className=' my-10 border w-200 h-16 flex items-center justify-center hover:bg-gray-200 duration-200 cursor-pointer '>Sepete Ekle</div>

        </div>
    </div>
  )
}

export default DetailComp
