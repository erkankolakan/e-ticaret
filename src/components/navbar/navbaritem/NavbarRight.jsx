import React, { useEffect } from 'react'
import {BiSearch} from "react-icons/bi"//react-icons içerisinden iconun önünden yazan ifadeyi çağırıyoruz.
import {AiOutlineHeart} from "react-icons/ai" 
import {SlBasket} from "react-icons/sl" 
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate} from 'react-router-dom'



 
const NavbarRight = () => {
 
  const   dispatch =useDispatch()
  const{carts} = useSelector(state => state.carts)
  console.log(carts , "carts")
  const navigate = useNavigate()


  useEffect( () => {  
    dispatch(getCartTotal())
  },[dispatch]) 


  return (
    <div className='flex items-center gap-8'>
        <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type='text' placeholder='Arama Yapınız'></input>
        <BiSearch size={28}/>
        </div>

        <AiOutlineHeart size={28}/>
        <div onClick={() => navigate("cart")} className='relative '>
          <div className='absolute flex justify-center items-center -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5'>{carts.length}</div>


   




          <SlBasket size={28}/>
        </div>
    </div>
  )
}

export default NavbarRight
