
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import ItemCount from './componentes/ItemCount';

function App() {
  
  const onAdd=(count)=>{
    
alert(`sumaste al carrito ${count}`)
  }
  return (
    <>
    <NavBar/>
    <ItemListContainer  />
    <ItemCount stock={5} initial={1} onAdd={onAdd}  />
    
    </>

  );
}

export default App;
