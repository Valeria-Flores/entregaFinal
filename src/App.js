import './App.css';
import NavBar from './components/navBar/NavBar';
import { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import CartWidget from './components/cart/CartWidget';


function App() {
  const [contador, setContador]=useState(0)


function sumaConEstado(){
  setContador(contador+1)
}


  return (
    <div className='App'>
      <div>
      <NavBar />
      </div>
      <ItemListContainer greeting='Bienvenidos a Atelier de ideas' />
      <br/>
    </div>
    
  );
}

export default App;
