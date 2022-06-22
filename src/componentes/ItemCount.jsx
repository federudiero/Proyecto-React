
import {Button} from 'react-bootstrap';

import './css/ItenCount.css'
function ItemCount({sumar,count, restar, onAdd}) {
 
  return (
    <>
    <div className='DivContainer'>
   
    <div className='divTest'>
      <div>
       <button className='botonItemCount'  onClick={sumar}>+</button>
      <h2>{count}</h2> 
      <button className='botonItemCount' onClick={restar}>-</button>
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