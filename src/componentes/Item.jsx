import React from 'react'
import {Card ,Button } from 'react-bootstrap'
import '../componentes/Item.css'

function Item({producto}) {
const {id ,nombre,price,pictureURL ,description} = producto



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
  
    <a href="/itemDetailContainer"><Button className='button' variant="primary" >ir ahora</Button></a>
  </Card.Body>
</Card>
</div>
</>
  )
}

export default Item

