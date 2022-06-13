
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
<Route path='/' element={<ItemListContainer/>}   />
{/* todos los productos de una categoria puntual segun el id */}
<Route path='/itemDetailContainer' element={<ItemDetailContainer/>}/>
{/* un productos segun el id */}
<Route path='/item/:id' element={<ItemDetailContainer/>}/>



</Routes>


</BrowserRouter>

    
 
    
    </>

  );
}

export default App;
