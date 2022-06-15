
import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../componentes/ItemDetail.css'




function ItemDetail( {productoDetail}) {

  const { nombre,price,pictureURL , pictureURL2, pictureURL3,description} = productoDetail

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
                          
                          { price}
                          <br />
                          <br />
                        
                          {description}


                         
                        </Card.Text>
                        <div className='divContainerLink'>
                        <Link exact to={`/`}  >
                            <Button className="button" variant="primary">
                                regresar
                            </Button>
                          
                        </Link>
                        <br />
                        <Link exact to={`/`} >
                            <Button className="button" variant="primary">
                                agregar al carrito
                            </Button>
                          
                        </Link>
                        </div>
                        
                        
                    </Card.Body>
                    </div>
                </Card>
                </div>

                


           







   
    
    </>
  )
}

export default ItemDetail