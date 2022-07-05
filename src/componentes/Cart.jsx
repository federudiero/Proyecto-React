import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import {Link} from 'react-router-dom';
import '../componentes/css/Cart.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'




 function Cart({}) {

  const { cart, deleteItem, getItemQty, getItemPrice, emptyCart } = useContext(CartContext)


  return (
    <>
    <div className='centerCart'>
      <h4 className='titleCart'>Carrito de compras</h4>


      {getItemQty() >0  ?

        <div className='cardCarrito'>
          <div className='tamanoTitleCart'>
            <div className='cartContainer'>
              <p className='cantidadCart'>Producto</p>
              <p className='precioCart'>Precio Unitario</p>
              <p className='subtotalCart'>Total</p>
            </div>
          </div>
          {cart.map(productoDetail => (

            <div className='lineCart'>
              <div className='cartContainer'>
                <img className='imgProducto img-fluid' src={productoDetail.pictureURL} alt={"Producto1"}  />
                <p className='cantidadCart'>{productoDetail.cantidad} x {productoDetail.nombre}</p>
                <p className='precioCart'>$ {productoDetail.price}</p>
                <p className='subtotalCart'> ${productoDetail.cantidad* productoDetail.price}</p>
                
                <p onClick={() => deleteItem(productoDetail.id)} className='eliminarItemCard'><FontAwesomeIcon className='faXmark' icon={faXmark} /></p>
              </div>
            </div>
          ))}


          <div className='impFinal'>
          <div className='labelTotal'>Importe total: ${getItemPrice()} ({getItemQty()} Producto/s)</div>

          <div>
          <Link to="/checkout/"> <button className='btnAddCar btnFinalC'>Finalizar Compra</button></Link>
            <button className='btnVaciarCarrito' onClick={emptyCart}>Vaciar Carrito</button>
          </div>
          </div>
        </div>

        : 
        <div className='noHayCompras'>
        <p>No hay productos en el carrito</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Link to="/"><button className='btnIrDeCompras'>Ir de compras</button></Link>
        </div>
        }






</div>
    </>
  )
}
export default Cart