import React,{useEffect} from 'react'

export default function TesPromesas() {
    useEffect(() => {
       const pagara = new Promise ((resolve,reject)=>{
           resolve("pago el total todo bien")
       })

       pagara.then((resolve)=>{
           console.log(pagara)
           console.log(resolve)
       })
     
    }, [])
    
  
  
  
  
  
  
  
    return (

   
  
  
  
  <>
        <div>TesPromesas</div>
    </>
  )
}
