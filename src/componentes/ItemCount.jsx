
import {Button} from 'react-bootstrap';

import  './ItenCount.css'
function ItemCount({sumar,count, restar, onAdd}) {

 

  
  
    


   
    
  return (
    <>
    <div className='DivContainer'>
   
    <div className='divTest'>
      <div>
       <button className='boton'  onClick={sumar}>+</button>
      <h2>{count}</h2> 
      <button className='boton' onClick={restar}>-</button>
      </div>
      <div>

      <Button className='botonAgregarCarrito'  onClick={()=>onAdd(count)} >agregar al carrito</Button>
    
      </div>
    </div>
    </div>
    </>
  )
}

export default ItemCount