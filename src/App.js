import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {ItemListContainer, ItemsDetailContainer} from './pages';
import { Header } from './components/layouts/header/Header';
import { useState } from 'react';
import { CartContext } from './context/cartContext';
import Carrito from './components/cart';













function App() {
  const [carrito, setCarrito] = useState([])

  const agregarCarrito = (item, cantidad) =>{
    const itemAgregado = {...item, cantidad}
    const nuevoCarrito = [...carrito]
    const estaEnCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id)
    if (estaEnCarrito){
        estaEnCarrito.cantidad += cantidad
        setCarrito(nuevoCarrito)
    }else{
        nuevoCarrito.push(itemAgregado)
        
    }
    setCarrito(nuevoCarrito)
   
}

const cantidadEnCarrito = () =>{
  return carrito.reduce((acc, produc) => acc + produc.cantidad, 0)
}

const precioTotal = () =>{
  return carrito.reduce((acc, produc) => acc + produc.cantidad * produc.price, 0)
}

const vaciarCarrito = () =>{
  setCarrito([])
}
 

  return (

    <div>
      <CartContext.Provider value={{carrito, agregarCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
        <BrowserRouter>
          <Header/>
          <Routes>
            
            <Route path = "/" element = {<ItemListContainer/>} />
            <Route path = "/category/:categoId" element = {<ItemListContainer/>} />
            <Route path = "/items-detail/:id" element = {<ItemsDetailContainer/>} />
            <Route path = "/cart" element = {<Carrito/>}/>
            
            
          </Routes>

                
        </BrowserRouter>
      </CartContext.Provider>

      </div>
    
    
    
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
