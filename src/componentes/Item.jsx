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
      <Button className="button" >
       ver detalle
     </Button>
                          
  </Link>
        
      </div>
    </div> 



    


</>
  )
}

export default Item

