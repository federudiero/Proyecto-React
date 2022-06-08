import React, { useState } from 'react'
import Item from './Item'

function ItemList({producto}) {
    
  
    return (
    <div>
        {producto.map(producto=><Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList