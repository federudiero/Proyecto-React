
import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';

import '../componentes/css/ItemDetail.css'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import  { CartContext } from './Context/CartContext';




function ItemDetail( {productoDetail}) {
  

  const {id, nombre,price,pictureURL ,description ,stock } = productoDetail
 

  const [unidades, setUnidades] = useState();
  const [count, setCount] = useState(1)  

  const {isInCart,addItem} =useContext(CartContext)
  
  
  function onAdd(count){
    console.log(count)
    
    alert(`Se han agregado: ${count} productos`);
     isInCart(productoDetail.id);
    addItem(productoDetail,count);
    
    setUnidades(count);
    
   
    
    
  }

  
  const sumar= ()=>{
    count<stock? setCount(count+1): alert("no puedes agregar mas productos")
    }
  const restar= ()=>{
    count>1? setCount(count-1): alert("no puedes agregar mas productos")
  }
  
  
 return (

    <>{pictureURL&&(
      <div className='DivContainerDetail'>
    <div className='divCONtainerItem'>
<div  className="DIvcard">
  <img variant="top"  src={pictureURL} className="imgDetailContainer"/>
  <div className="DIvcardBody">
    <h2 className="h2cardTitle">{nombre}</h2>
    <p className="pcardText">
      {description}
    </p>
  </div>
  <ul className="list-group-flush">
    <p className='precioLi'>Precio : ${price}</p>
    <li>Stock {stock}</li>
    <li>ID {id}</li>
  </ul>
  <div>
    
        <Link  to={`/`}  ><button className="btn-fin" >regresar</button></Link>
        <button className='btn-fin'>{unidades > 0 ? <Link to={'/cart'}  className="btn-fin">Terminar mi compra</Link>:<ItemCount stock={stock} sumar={sumar} restar={restar} count={count}  onAdd={onAdd}/>} </button>
        

       
  </div>
</div>

</div>
</div>

)}
    </>
  )
}


export default ItemDetail