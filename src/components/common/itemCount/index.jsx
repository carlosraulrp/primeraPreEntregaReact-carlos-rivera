
import { Button } from "react-bootstrap"
import "./styles.css"


const ItemCount = ({cantidad, handleRestar, handleSumar, agregarCarrito}) => {

  
  return (
    <>
        <div className="itemCount">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <Button variant="primary" onClick={agregarCarrito}>+Agregar al carrito</Button>

    </>
  )
}

export default ItemCount