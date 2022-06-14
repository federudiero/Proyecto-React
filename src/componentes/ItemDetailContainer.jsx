import { useEffect, useState } from "react"
import React  from 'react'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';


let productos=[
  {

    id:'1',
    nombre:'Notebook ASUS',
    price:'$50000',
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/KENC231A/1000x1000-KENC231A.jpg&w=500&q=100',
    
  },
  
  {

    id:'2',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  
  {

    id:'3',
    nombre:'Notebook ASUS VivoBook2',
    price:'$60000',
    description:"otebook Asus VivoBook X513EA negra 15.6, Intel Core i7 1165G7 16GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 96EUs 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_671953-MLA48632493165_122021-F.webp',
    
  } ,
  {

    id:'4',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'5',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'6',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'7',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'8',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'9',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'10',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'11',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'12',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'13',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'14',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'15',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,
  {

    id:'16',
    nombre:'Notebook ASUS VivoBook',
    price:'$40000' ,
    description:"Notebook Asus ZenBook Pro Duo UX482EG azul celestial táctil 14 Intel Core i5 1135G7 16GB de RAM 512GB SSD, NVIDIA GeForce MX450 1920x1080px Windows 10 Home",
    pictureURL:'https://http2.mlstatic.com/D_NQ_NP_2X_609622-MLA48061947613_102021-F.webp',
    
  } ,

   ]

function ItemDetailContainer() {
   
    const [productoDetail , setProductoDetail] =useState([]);
    const {id} =useParams();
       
    useEffect(() => {
 
          
   
            const computadora= new Promise((res,rej)=>{
              setTimeout(()=>
              {(!id)? res(productos) : res(productos.find(item=>item.id==id))
              },2000)
            })
            computadora
            .then((res)=>{
                setProductoDetail(res)
            })
        
          
            .catch((error)=>{
              console.error("error",error)
            })
        
            .finally(()=>{
        
            })
            
          }, [id])
      
          console.log(productoDetail) 
       
           
            


        

  return (
    <div>
       
        
      <ItemDetail productoDetail={productoDetail}/>
        
    </div>
  )
}

export default ItemDetailContainer