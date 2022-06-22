import React, { useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from './Context/CartContext';

function CartWidget() {
  const {getItemQty} =useContext(CartContext)
  return (
      <>
    <AddShoppingCartIcon item={getItemQty()} />
    </>
  )
}

export default CartWidget