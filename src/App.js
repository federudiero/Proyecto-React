

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import MyProvider from "./componentes/Context/CartContext";
import Cart from './componentes/Cart';
import { initializeApp } from "firebase/app";





function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDW8HhhFIQ7G0Ljey8rnzMSjPBtrYlHNLE",
    authDomain: "proyecto-react-57f61.firebaseapp.com",
    projectId: "proyecto-react-57f61",
    storageBucket: "proyecto-react-57f61.appspot.com",
    messagingSenderId: "559240701753",
    appId: "1:559240701753:web:abad7a8e750df7c13aeae8",
    measurementId: "G-GSY22MHQPK"
  };
  
  
  initializeApp(firebaseConfig);
  
   

//   const onAdd=(count)=>{
    
// alert(`sumaste al carrito ${count}`)
//   }
  return (
    <>
   <MyProvider >
      <BrowserRouter>
      
     
      <NavBar/>  
    
      
      <Routes>
          {/* mostrar todos los productos */}
          <Route path='/' element={<ItemListContainer  />}></Route>


          {/* todos los productos de una categoria puntual segun el id */}
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>


          {/* un productos segun el id */}
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>

          <Route path="/cart" element={<Cart />} />


      </Routes>
      
      </BrowserRouter>
      </MyProvider>
      
</>

  );
}


export default App;



