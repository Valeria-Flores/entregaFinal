import './App.css';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Count from "./components/counter/Count"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h3>404 NOT FOUND</h3>}></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;



/*
<ItemListContainer greeting='Bienvenidos a Atelier de ideas' />
      <br/>
      <ItemDetailContainer></ItemDetailContainer>
      <Count inicial={1} stock={10} add={(cantidad)=> console.log("Añadido al carrito",cantidad)}></Count>
*/