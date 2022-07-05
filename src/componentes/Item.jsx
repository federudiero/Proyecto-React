import React from 'react'
import {Card ,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../componentes/css/Item.css'

function Item({producto}) {
const {id ,nombre,price,pictureURL } = producto



  return (


<>
<div className="card text-center  animate__animated animate__fadeInUp ">
      <div className="overflow">
        <img src={pictureURL} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{nombre}</h4>
        <p className="card-text text-secondary">
        ${price}
        </p>
        <Link  to={`/item/${id}`} >
      <Button className="button" variant="primary">
       ver detalle
     </Button>
                          
  </Link>
        
      </div>
    </div>








 

















{/* <div className='divContainerCard'>

   <Card  className='Card' >
   
  <Card.Img variant="top" className='imgCard' src={pictureURL} />
  

  <Card.Body>
    <Card.Title className='CardTitle'>{nombre}</Card.Title>
    <Card.Text className='CardText'>
      ${price}
      
     
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
</div> */}
</>
  )
}

export default Item

