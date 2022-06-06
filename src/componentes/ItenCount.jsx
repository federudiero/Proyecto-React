import React , {useState ,useEffect} from 'react'
import  './ItenCount.css'
function ItenCount({initial ,stock ,onAdd}) {
    const [count ,setCount] = useState(initial)
  

    const sumar= ()=>{
      count<stock? setCount(count+1): alert("no puedes agregar mas productos")
      }
    const restar= ()=>{
      count>initial? setCount(count-1): alert("no puedes agregar mas productos")
    }
    const reset= ()=>{setCount(initial)}


   
    
  return (
    <>
    <div className='DivContainer'>
    <h2>ejercicio contador Rudiero Federico</h2>
    <div className='divTest'>
      
      <h2>{count}</h2> 
      <button className='boton'  onClick={sumar}>sumar</button>
      <button className='boton' onClick={restar}>restar</button>
     
      <button className='boton' onClick={reset}>reset</button>  
      <button className='botonAgregarCarrito' onClick={()=>onAdd(count)} >agregar al carrito</button>
    </div>
    </div>
    </>
  )
}

export default ItenCount