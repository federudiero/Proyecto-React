import React, { useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from './Context/CartContext';

import {  Badge} from "@mui/material";

function CartWidget() {
  const {getItemQty} =useContext(CartContext)
  return (
      <>
      {getItemQty()>0&&<span>{getItemQty()}</span>}
      
    <AddShoppingCartIcon  badgeContext={getItemQty()}/>
   
    

    </>
  )
}

export default CartWidget