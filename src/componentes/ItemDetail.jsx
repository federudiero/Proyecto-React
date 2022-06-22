
import React from 'react'
import {Card, Button} from 'react-bootstrap';
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

    <>

                <div className='divContainerDetail'>

                    <Card  className='DivCard' >
                    <div className='divIMGContainer'>
                    <Card.Img variant="top" className='imgCardDetail' src={pictureURL} />
                    <div className='divContainerImgMin'>
                   
                    </div>
                    </div>
                    <div className='divTextContainer'>
                    <Card.Body className='Card-Body'>
                        <Card.Title className='CardTitleText'>{nombre}</Card.Title>
                        <Card.Text className='CardTextDetail'>

                        <p className='precioText'>${price}</p>
                          
                          
                          
                        <p className='DescriptionText'>{description}</p>
                          
                        <p className='stockText'>Stock  {stock}</p>
                        {id}

                          
                          
                          


                         
                        </Card.Text>
                        <div className='divContainerLink'>
                        <Link exact to={`/`}  >
                            <Button className="btn-fin" variant="primary">
                                regresar
                            </Button>
                        </Link>
                        <br />
                        {unidades > 0 ? <Link to={'/cart'} className="btn-fin">Terminar mi compra</Link>:<ItemCount stock={stock} sumar={sumar} restar={restar} count={count}  onAdd={onAdd}/>} 

                        </div>
          
                    </Card.Body>
                   
                    </div>
                 
                </Card>
                </div>

                


           







   
    
    </>
  )
}


export default ItemDetail