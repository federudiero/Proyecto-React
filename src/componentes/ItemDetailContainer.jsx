import { useEffect, useState } from "react"
import React  from 'react'
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';
import {getDoc ,getFirestore,doc, onSnapshot} from 'firebase/firestore'


function ItemDetailContainer() {
   
    const [productoDetail , setProductoDetail] =useState([]);
    const {id} =useParams([]);
    
   
       
    useEffect(() => {
           const db = getFirestore();
           const productRef=doc(db,'productos',id)
           getDoc(productRef).then((snapshot)=>{
            setProductoDetail({...snapshot.data(),id:snapshot.id})

           }).catch((error)=>{
            console.log(error)
          }).finally(()=>{
            console.log("finalizo ")
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