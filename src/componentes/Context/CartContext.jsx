import { useEffect, useState , createContext } from "react";
export const CartContext=createContext()

const{Provider}= CartContext;

function MyProvider({children}) {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])

  useEffect(() => 
  {
      localStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);



 //item detail se vA A ENCargar el producto al cart,sin pisar a los agregados ,y si esta duplicado aumenta la cantidad
const addItem=(item,count)=>{
  
  if(isInCart(item.id)){
    
    const findProduct=cart.find((x)=>x.id==item.id);
    const productIdex=cart.indexOf(findProduct);
    const auxArray =[...cart];
    auxArray[productIdex].cantidad += count;
    setCart(auxArray);
  }else{
    
    const newItem={
      ...item,cantidad:count,
    };
   
    setCart([...cart,newItem])
    
  }
}
//metodo some la voy a usar en itemdeatil se encarga si el productoa agregar ya esta en el carrito o no
const isInCart=(id)=>{
   
  return cart.some((i)=>i.id === id )
  
  
}




  //vacia el carrito
  const emptyCart=()=>{
    setCart([])
  }



  //metodo filter para filtrar el componente
  const deleteItem=(id)=>{
    return setCart(cart.filter((i)=>i.id !==id))
  }



//cuantos productos tengo en el carrito se utiliza el metodo reduce que sirve para acumular
  const getItemQty=()=>{
     return cart.reduce((acc,x)=>acc+=x.cantidad,0)

  }
//retorna el precio total del carrito
  const getItemPrice=()=>{
    return cart.reduce((acc,i)=>acc +=i.cantidad*i.price,0)

  }
  

  
  
  
  
  return (

    <Provider value={{isInCart,addItem,deleteItem,emptyCart,getItemPrice,getItemQty,cart}}>{children}</Provider>
  )
}

export default MyProvider