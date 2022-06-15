import React from 'react'
import {Card ,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../componentes/Item.css'

function Item({producto}) {
const {id ,nombre,price,pictureURL } = producto



  return (


<>
<div className='divContainerCard'>

   <Card  className='Card' >
   
  <Card.Img variant="top" className='imgCard' src={pictureURL} />
 
  <Card.Body>
    <Card.Title className='CardTitle'>{nombre}</Card.Title>
    <Card.Text className='CardText'>
      {price}
      
     
    </Card.Text>
  <div className='divContenedorBoton'>
    <Link  to={`/item/${id}`} >
      <Button className="button" variant="primary">
       ver detalle
     </Button>
                          
  </Link>
  </div>
  </Card.Body>
</Card>
</div>
</>
  )
}

export default Item

