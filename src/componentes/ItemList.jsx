import React, { useState } from 'react'
import Item from './Item'
import '../componentes/ItemList.css'

function ItemList({producto}) {
    
  
    return (
    <div className='ItemListC'>
        {producto.map(producto=><Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList