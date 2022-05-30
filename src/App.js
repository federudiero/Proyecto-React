
import './App.css';
import ItenListContainer from './componentes/ItenListContainer';

import NavBar from './componentes/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItenListContainer saludo={`te saludo `} nombre ="juan" />
    
    </>
  );
}

export default App;
