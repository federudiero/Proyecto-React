
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import '../componentes/css/ItemDetail.css';
import { CartContext } from './Context/CartContext';
import ItemCount from './ItemCount';
import swall from 'sweetalert'





function ItemDetail( {productoDetail}) {
  

  const {id, nombre,price,pictureURL,description ,stock } = productoDetail
 

  const [unidades, setUnidades] = useState();
  const [count, setCount] = useState(1)  

  const {isInCart,addItem,getItemQty} =useContext(CartContext)
  
  
  function onAdd(count){
    console.log(count)
    
    swall(`Se han agregado: ${count} productos`);
     isInCart(productoDetail.id);
    addItem(productoDetail,count);
    
    setUnidades(count);
    
   
    
    
  }

  
  const sumar= ()=>{
    count<stock? setCount(count+1): swall("no puedes agregar mas productos del que hay en stock")
    }
  const restar= ()=>{
    count>1? setCount(count-1): swall("no puedes agregar menos de un producto")
  }
  
  
 return (

    <>{pictureURL&&(
      <div className='DivContainerDetail'>
    <div className='divCONtainerItem'>
<div  className="DIvcard">
  <div className='divIMG'>
  <img variant="top"  src={pictureURL} className="imgDetailContainer"/>
  </div>
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
        <button className='btn-fin'>
          {unidades > 0 ?
          
          <Link to={'/cart'}  className="btn-fin">Terminar mi compra</Link>
          
          :
          
          <ItemCount 
          stock={stock} 
          sumar={sumar} 
          restar={restar} 

          count={count}  
          onAdd={onAdd}/>} 
          
          </button>
        

       
  </div>
</div>

</div>
</div>

)}

    </>
  )
}


export default ItemDetail