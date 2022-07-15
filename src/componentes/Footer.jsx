import React from 'react'
import './css/Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom';
import {faShop} from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
 
        <footer id="footer">
    <div className="contenedor footer-content">
    <Link className='LinkFooter' to="/"><h2 className="brand">Ecommerce</h2></Link>
    <FontAwesomeIcon className='IconEcommerce' icon={faShop} />
    <h4>contacto</h4>
   
     <p>Cel: 3518120950</p> 
     <p>Email: federudiero@gmail.com </p> 
    
    </div>
    <div className="line"></div>
    
</footer>

  )
}

export default Footer