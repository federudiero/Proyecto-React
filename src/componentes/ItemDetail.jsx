import '../componentes/ItemDetail.css'
import React from 'react'
import {Card, Button} from 'react-bootstrap';





function ItemDetail( {productoDetail}) {

    
 return (

    <>
 
        
        

            
                <div className='divContainerCard'>

                    <Card  className='Card' >
                    <Card.Img variant="top" className='imgCard' src={productoDetail.pictureURL} />
                    <Card.Body>
                        <Card.Title className='CardTitle'>{productoDetail.nombre}</Card.Title>
                        <Card.Text className='CardText'>
                        {productoDetail.price}
                        <br />
                        <br />
                        {productoDetail.description}
                        <br />
                        <br />
                        {productoDetail.id}
                        </Card.Text>
  
                        <a href="/itemDetailContainer"><Button className='button' variant="primary" >ir ahora</Button></a>
                    </Card.Body>
                </Card>
                </div>


           







   
    
    </>
  )
}

export default ItemDetail