import React, { useState ,useEffect } from 'react'
import ItemList  from './ItemList'
function ItemListContainer({}) {
  

  const [producto ,setProducto]= useState([])

  useEffect(() => {
   
    const computadora= new Promise((res,rej)=>{
      setTimeout(()=>
      {res([
        {id:'000111',nombre:'Notebook ASUS',price:'$50000',description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home" ,pictureURL:'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC231A/1000x1000-KENC231A.jpg&w=500&q=100'} ,

        {id:'000113',nombre:'Notebook ASUS VivoBook',price:'$40000' ,description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home"  ,pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp'} ,

        {id:'00011',nombre:'Notebook ASUS VivoBook2',price:'$60000' ,description:"otebook Asus VivoBook X513EA negra 15.6, Intel Core i7 1165G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 10 Home"  ,pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_671953-MLA48632493165_122021-F.webp'} 

       ])
      },2000)
    })
    computadora
    .then((res)=>{
      setProducto(res)
    })

  
    .catch((error)=>{
      console.error("error",error)
    })

    .finally(()=>{

    })
    
  }, [])

  console.log(producto)
  





  return (
    <>
   
    <div className='divItenListContainer'>
      {<ItemList   producto={producto}/>}
    </div>
    </>
  )
}

export default ItemListContainer