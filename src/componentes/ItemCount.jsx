
import {Button} from 'react-bootstrap';

import './css/ItenCount.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus ,faMinus} from '@fortawesome/free-solid-svg-icons'
function ItemCount({sumar,count, restar, onAdd}) {
 
  return (
    <>
  
   
    <div className='divTest'>
      <div className='divContador'>
      <FontAwesomeIcon className='scr'  onClick={restar} icon={faMinus} />
      <h2 className='scrh2' >{count}</h2> 
      <FontAwesomeIcon className='scr' onClick={sumar} icon={faPlus} />
    
     </div>
      <div>
      <button className='botonAgregarCarrito'  onClick={()=>onAdd(count)} >agregar al carrito</button>
      </div>
      
    </div>
    
    </>
  )
}

export default ItemCount