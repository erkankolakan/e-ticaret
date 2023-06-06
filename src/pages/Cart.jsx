import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'

const Cart = () => {

    const dispatch = useDispatch()  
    const{carts, totalAmount,itemCount } = useSelector(state => state.carts)
    console.log(carts,totalAmount,itemCount, "erkan")

  
  
    useEffect( () => {  
      dispatch(getCartTotal())
    },[dispatch]) 


    
  return (
    <div>
        {
            carts?.length > 0 ? <div>
            {
                carts?.map((cart , i) => (
                    <CartComp key={i} cart={cart}/>
                ))
            }
            
            <hr/>
            <div className='text-xl flex justify-end items-center '>Toplam Tutar: <span className='font-bold text-2xl ml-2'>{totalAmount}TL</span></div>
            </div> : 
            <div className='text-5xl  justify-center align-center flex'>
                Kartınız Boş :,)
            </div>
        }
  
    </div>
  )
}

export default Cart

