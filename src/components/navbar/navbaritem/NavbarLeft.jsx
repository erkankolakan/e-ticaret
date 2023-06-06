import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {

  const navigate = useNavigate();

  const hedef = () => {
    navigate("/")
  }



  return (
    <div className='text-6xl hover:cursor-pointer'>
       <div onClick={hedef}>Burda</div>
    </div>
  )
}

export default NavbarLeft
