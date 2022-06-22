import React, { useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from './Context/CartContext';
import {  Badge} from "@mui/material";

function CartWidget({}) {
  const {getItemQty} =useContext(CartContext)
  return (
      <>
      <Badge badgeContext={getItemQty()} color="primary">
    <AddShoppingCartIcon  />
    </Badge>
    

    </>
  )
}

export default CartWidget