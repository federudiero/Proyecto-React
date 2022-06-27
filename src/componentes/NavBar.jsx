
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartWidget from './CartWidget';




const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const  NavBar= ({}) => {
  const {category} =useParams()

 
  useEffect(() => {
   
  console.log(category)
   
    
  }, [category])
  
 
  

  
  return (
          <nav className="navbar bg-dark">
            <div className=" NavbarDIV">
              <Link to="/"><button className='btnNavBar'>Inicio</button></Link>     
              <Link  to="/category/notebook" ><button className='btnNavBar'>Notebook</button></Link>
              <Link to="/category/celulares" ><button className='btnNavBar'>Celulares</button></Link>
              <Link to="/category/televisores" ><button className='btnNavBar'>Televisores</button></Link>
             
              
              
            </div>
            <Link to="/cart" className="carrito" >   <CartWidget  /></Link>
          </nav>
  );
};
export default NavBar;

