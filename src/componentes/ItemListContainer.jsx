import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList  from './ItemList'
import '../componentes/css/ItenListContainer.css'
import  Carousel from './Carousel'
import {collection,getDocs ,getFirestore,query ,where} from 'firebase/firestore'


// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {Link } from 'react-router-dom';
// import {faShop} from '@fortawesome/free-solid-svg-icons';
// <div>
//       <FontAwesomeIcon to="/" className='IconEcommerce' icon={faShop}/>  
//       <FontAwesomeIcon className='IconEcommerce' icon={faShop} />
//       <FontAwesomeIcon className='IconEcommerce' icon={faShop} />
//       <FontAwesomeIcon className='IconEcommerce' icon={faShop} />
//       </div>

function ItemListContainer() {
  const {id} =useParams();
  
  const [producto ,setProducto]= useState([]);

  useEffect(() => { 
    const db = getFirestore();
    const pruductsCollection = collection(db ,'productos' )

    if (id){
      const q = query(pruductsCollection,where('category','==',id))
      getDocs(q).then(snapshot =>{
        setProducto(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    
        }).catch((error)=>{
          console.log(error)
        }).finally(()=>{
          console.log("finalizo ")
        })
      }else{

getDocs(pruductsCollection).then(snapshot =>{
    setProducto(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }).catch((error)=>{
      console.log(error)
    }).finally(()=>{
      console.log("finalizo ")
    })
    }
  }, [id])

  console.log(producto)
  





  return (
    <>
     <Carousel/>
    <div className='divTituloPortada'><h1 className='TituloPortada'>Ecommerce</h1></div>
   
    <div className='divItenListContainer'>

      

      

      <ItemList   producto={producto}/>
    </div>


    </>
  )
}

export default ItemListContainer