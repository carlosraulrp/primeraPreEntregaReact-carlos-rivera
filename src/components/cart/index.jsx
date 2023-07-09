import { useContext } from "react"
import { CartContext } from "../../context/cartContext"


const Cart = () => {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const handleVaciar = () =>{
        vaciarCarrito()
    }

  return (
    <div className="container">
        <h1>Carrito</h1>
        {
            carrito.map((produc) => (
                <div key={produc.id}>
                    <h3>{produc.name}</h3>
                    <p>Precio Unit: ${produc.price}</p>
                    <p>Cantidad:{produc.cantidad}</p>
                    <p>Precio total: ${produc.price * produc.cantidad}</p>
                    <br />
                    
                        
                </div>
            ))
        }
        {
            carrito.length > 0 ?
            <>
                <h2>Total a pagar:$ {precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar Carrito</button>
            </>:
            <h2>Carrito vacio, agregar productos</h2>
        }
    </div>
  )
}

export default Cart