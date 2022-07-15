
import { formGroupClasses } from '@mui/material';
import { useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import CartWidget from './CartWidget';
import {Nav,Container,Navbar ,NavDropdown} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShop} from '@fortawesome/free-solid-svg-icons'







const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const  NavBar= ({}) => {
  const {category} =useParams()

 
  useEffect(() => {
   
  console.log(category)
   
    
  }, [category])
  
 
  

  
  return (<>
  

<Navbar bg="dark" expand="lg">
  <Container>

    <Navbar.Brand ><FontAwesomeIcon className='IconEcommerce' icon={faShop} /></Navbar.Brand>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <div className=" NavbarDIV">
                 
               <Link  className='LinkBTN'  to="/" >Inicio</Link> 
              <Link  className='LinkBTN'  to="/category/notebook" >Notebook</Link>
              <Link  className='LinkBTN' to="/category/celulares" >Celulares</Link>
              <Link  className='LinkBTN' to="/category/televisores" >Televisores</Link>
             
              
              
            </div>
        
      </Nav>
    </Navbar.Collapse>
    <Link to="/cart" className="carrito" >   <CartWidget  /></Link>
  </Container>
</Navbar>










         
          </>

  );
};
export default NavBar;

