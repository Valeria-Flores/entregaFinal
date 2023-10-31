import './App.css';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Count from "./components/counter/Count"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import { productos } from './muebles';
import Checkout from './components/checkout/Checkout';

function App() {
  useEffect(()=>{
    const coleccionProductos = collection(db,"productos")
    productos.map((item)=> addDoc(coleccionProductos,item))
  },[])

  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='*' element={<h3>404 NOT FOUND</h3>}></Route>
          </Routes>
        </CartProvider> 
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