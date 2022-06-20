
import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from 'react';

import '../componentes/ItemDetail.css'
import ItemCount from './ItemCount';




function ItemDetail( {productoDetail}) {

  const { nombre,price,pictureURL , pictureURL2, pictureURL3,description ,stock } = productoDetail
  console.log(productoDetail)

  const [unidades, setUnidades] = useState();
  const [count, setCount] = useState(1)  

  
  const sumar= ()=>{
    count<stock? setCount(count+1): alert("no puedes agregar mas productos")
    }
  const restar= ()=>{
    count>1? setCount(count-1): alert("no puedes agregar mas productos")
  }
  
  function onAdd(count){
    alert(`Se han agregado: ${count} productos`);
    setUnidades(count);
  }

 return (

    <>

                <div className='divContainerDetail'>

                    <Card  className='DivCard' >
                    <div className='divIMGContainer'>
                    <Card.Img variant="top" className='imgCardDetail' src={pictureURL} />
                    <div className='divContainerImgMin'>
                    <Card.Img variant="top" className='imgCardMin' src={pictureURL2} />
                    <Card.Img variant="top" className='imgCardMin' src={pictureURL3} />
                    </div>
                    </div>
                    <div className='divTextContainer'>
                    <Card.Body className='Card-Body'>
                        <Card.Title className='CardTitleText'>{nombre}</Card.Title>
                        <Card.Text className='CardTextDetail'>

                        <p className='precioText'>{price}</p>
                          
                          
                          
                        <p className='DescriptionText'>{description}</p>
                          
                        <p className='stockText'>Stock  {stock}</p>

                          
                          
                          


                         
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