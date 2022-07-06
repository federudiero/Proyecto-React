import {useState, useContext} from 'react';

import '../css/FbCheckout.css'
import  { CartContext } from '../Context/CartContext';

import { addDoc, collection, getFirestore } from 'firebase/firestore';  
import swall from 'sweetalert'  
  
const FbCheckout = () => {
   // Contexto de Carrito.
   const { cart,  getItemPrice } = useContext(CartContext)
   //Nombre de usuario, email, celular en estado.
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [cel, setCel] = useState("")

   const [validation, setValidation] = useState({
       name: false,
       email: false,
       cel: false
   })

   //Grabamos el Id del usuario en estado.
   const [idCompra, setIdCompra] = useState("")

   //Base de datos Firestore.
   const db = getFirestore()
   const orderCollection = collection(db, "orders")

   function validarEmail() {
       if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
           setValidation({ ...validation, email: true });
       } else {
           setValidation({ ...validation, email: false });
       }
   }



   function validarNombre() {
       if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)) {
           setValidation({ ...validation, name: true });
       } else {
           setValidation({ ...validation, name: false });
       }
   }



   function validarCelular() {
       if (/^[0-9]+$/.test(cel) && cel.length >= 9) {
           setValidation({ ...validation, cel: true });
       } else {
           setValidation({ ...validation, cel: false });
       }
   }



   function handleClick() {
       //controlamos que el usuario haya ingresado datos.
       




       const order = {
           buyer: { name, email, cel },
           items: cart,
           total: getItemPrice()
       }

       if (validation.name && validation.email && validation.cel){

       addDoc(orderCollection, order).then(({ id }) => {
           setIdCompra(id)
       })} else{
        swall("Por favor, ingrese todos los datos requeridos.")
       }

   }
   {
          



   }
	

	return (

        


    <div className='checkoutContainer'>
        {idCompra != "" ?

            <div className='divContainerCompraRealizada '>

                <h4 className='H45Compra'>Gracias por tu compra</h4>
                
                <h5 className='H45Compra'>Tu orden esta siendo procesada, te notificaremos via email para brindarte mas detalles.</h5>
                
                
                <div className='CodigoDeSeguimiento'>
                    <b className='t'>Tu codigo de seguimiento es:</b> <b className=''>{idCompra}</b>
                </div>
               

                <div className='DivContainerInfo'>
                    <p>Nombre y Apellido: <b>{name}</b></p>


                    <p>Correo electrónico: <b>{email}</b></p>


                    <p>Nº de Whatsapp: <b>{cel}</b></p>
                </div>

                <h6 className='titleT'>Nos pondremos en contacto para coordinar la entrega del producto.</h6>
               
            
            </div>
            :
            <>
            <div className='DivContenedorFormulario'>
               
              <h2 className='H2Formulario'>Formulario de Contacto</h2>
               
                <b  className='BDescripcion'>Por favor ingresa tus datos para Finalizar la compra</b>
                
                
                
                <div className='cardUser'>
                    <div className="input-group mb-3">
                     <input 
                        onKeyUp={validarNombre} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre y Apellido"/>
                    </div>
                    {validation.name ? <p className="validation">Nombre y Apellido válidos</p> : name == "" ? "" : <p className="validationX">Solo se permiten letras</p>}




                    <div className="input-group mb-3">
                        
                        <input 
                        onKeyUp={validarEmail} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="tucorreo@correo.com" 
                        />
                    </div>
                    {validation.email ? <p className="validation">Correo válido</p> : email == "" ? "" : <p className="validationX">Agregá un correo válido Ej:juan@empresa.com</p>}



                    <div className="input-group mb-3">
                        <input 
                        onKeyUp={validarCelular} 
                        onChange={(e) => setCel(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="Ej: 341 5478745"  />
                    </div>
                    {validation.cel ? <p className="validation">Celular válido</p> : cel == "" ? "" : <p className="validationX">Agregue un celular válido Ej:0351123456</p>}

                    
                    
                    <button onClick={() => handleClick()} type="button" className="btn btn-success">Confirmar Compra</button>

                </div>
                </div>
            </>
        }

       
       
    </div>
);
}
 
export default FbCheckout;