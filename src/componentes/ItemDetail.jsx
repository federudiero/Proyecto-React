
import React from 'react'
import {Card} from 'react-bootstrap';

import '../componentes/ItemDetail.css'




function ItemDetail( {productoDetail}) {

  const { nombre,price,pictureURL ,description} = productoDetail

 return (

    <>
 
        
  
            
                <div className='divContainerDetail'>

                    <Card  className='DivCard' >
                    <div className='divIMGContainer'>
                    <Card.Img variant="top" className='imgCardDetail' src={pictureURL} />
                    </div>
                    <div className='divTextContainer'>
                    <Card.Body className='Card-Body'>
                        <Card.Title className='CardTitleText'>{nombre}</Card.Title>
                        <Card.Text className='CardTextDetail'>
                          
                          {price}
                          <br />
                          <br />
                          <br />
                          
                         
                          {description}
                          
                        </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
                </div>

                


           







   
    
    </>
  )
}

export default ItemDetail