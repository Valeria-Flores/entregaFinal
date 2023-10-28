import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget =() =>{
  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget'>
      <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='icono de carrito' width={30} height={30}/>
      {totalQuantity}
    </Link>
    
   
  )
}

export default CartWidget