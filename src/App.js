
import './App.css';
import ItenListContainer from './componentes/ItenListContainer';

import NavBar from './componentes/NavBar';
import TesPromesas from './componentes/TesPromesas';

import ItenCount from './componentes/ItenCount';

function App() {
  
  const onAdd=(count)=>{
    
alert(`sumaste al carrito ${count}`)
  }
  return (
    <>
    <NavBar/>
    <ItenListContainer saludo={`te saludo `} nombre ="juan" />
    <ItenCount stock={5} initial={1} onAdd={onAdd} />
    <TesPromesas/>
    </>

  );
}

export default App;
