
import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../componentes/ItemDetail.css'




function ItemDetail( {productoDetail}) {

  const {id ,nombre,price,pictureURL ,description} = productoDetail

 return (

    <>
 
        
        

            
                <div className='divContainerCard'>

                    <Card  className='Card' >
                    <Card.Img variant="top" className='imgCard' src={pictureURL} />
                    <Card.Body>
                        <Card.Title className='CardTitle'>{nombre}</Card.Title>
                        <Card.Text className='CardText'>
                        {price}
                        <br />
                        <br />
                        {description}
                        <br />
                        <br />
                        {id}
                        </Card.Text>
                          <Link exact to={`/item/${id}`} >
                            <Button className="button" variant="primary">
                              ir ahora
                            </Button>
                          
                          
                          </Link>
                       
                    </Card.Body>
                </Card>
                </div>


           







   
    
    </>
  )
}

export default ItemDetail