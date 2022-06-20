import React , {useState} from 'react'
import {Button} from 'react-bootstrap';

import  './ItenCount.css'
function ItemCount({sumar,count, restar, onAdd}) {

 

  
  
    


   
    
  return (
    <>
    <div className='DivContainer'>
   
    <div className='divTest'>
      
      <h2>{count}</h2> 
      <button className='boton'  onClick={sumar}>+</button>
      <button className='boton' onClick={restar}>-</button>
      <Button className='botonAgregarCarrito'  onClick={()=>onAdd(count)} >agregar al carrito</Button>
    
    
    </div>
    </div>
    </>
  )
}

export default ItemCount