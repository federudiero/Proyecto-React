import {  useState , createContext } from "react";
export const CartContext=createContext()

const{Provider}= CartContext;

function MyProvider({children}) {

  const [cart,setCart]=useState([])


 //item detail se vA A ENCargar el producto al cart,sin pisar a los agregados ,y si esta duplicado aumenta la cantidad
 const addItem=([item] ,count)=>{
  const newItem={...item,count}


  if(isInCart (newItem.id) ){
    const findProduct= cart.find(x=>x.id==newItem.id)
    const productIndex=cart.idexOf(findProduct)
    const auxArray=[...cart]
    auxArray[productIndex].count += count
    setCart(auxArray)

  }else{
    setCart([...cart],newItem)
  }

}





  //metodo some la voy a usar en itemdeatil se encarga si el productoa agregar ya esta en el carrito o no
  const isInCart=(id)=>{
    return cart.some(item=>item.id ===id )
    
  }
 



  //vacia el carrito
  const emptyCart=()=>{
    setCart([])
  }



  //metodo filter para filtrar el componente
  const deleteItem=(id)=>{
    return cart.filter(item=>item.id !==id)
  }



//cuantos productos tengo en el carrito se utiliza el metodo reduce que sirve para acumular
  const getItemQty=()=>{
    return cart.reduce((acc,item)=>acc+=item.count,0)

  }
//retorna el precio total del carrito
  const getItemPrice=()=>{
    return cart.reduce((acc,item)=>acc +=item.count*item.price,0)

  }
  
  return (

    <Provider value={{isInCart,addItem,deleteItem,emptyCart,getItemPrice,getItemQty,cart}}>{children}</Provider>
  )
}

export default MyProvider