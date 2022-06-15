
import { Slider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';


 function App() {
  
//   const onAdd=(count)=>{
    
// alert(`sumaste al carrito ${count}`)
//   }
  return (
    <>
<BrowserRouter>
<NavBar/>  

<Routes>
{/* mostrar todos los productos */}
<Route path='/' element={<ItemListContainer/>}></Route>


{/* todos los productos de una categoria puntual segun el id */}
<Route path='/category/:id' element={<ItemListContainer/>}></Route>


{/* un productos segun el id */}
<Route path='/item/:id' element={<ItemDetailContainer/>}></Route>




</Routes>


</BrowserRouter>

    
 
    
    </>

  );
}


export default App;



