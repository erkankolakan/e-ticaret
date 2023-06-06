import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {



  const dispatch = useDispatch();


  return (
    <div className='my-10 text-lg flex items-center justify-between border-2 p-10'>
      <img className='2-[150px] h-[150px] object-cover' src={cart?.image} alt="resim"/>
      <div className='w-[476px]'>
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
        <div >{cart?.price} TL ({cart?.quantity} ADET)</div>
        <div onClick={() => dispatch(removeFromCart(cart?.id))} className=' bg-red-500 text-white w-[200px] h-16 flex items-center justify-center rounded-lg hover:bg-red-400 cursor-pointer transition duration-300 text-xl '> Ürünü Sil </div>
    </div>
  )
}

export default CartComp
