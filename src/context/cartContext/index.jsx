import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
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
  
    <CartContext.Provider value={{carrito, agregarCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
  )
}


export {CartContext, CartProvider}