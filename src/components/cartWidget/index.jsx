
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";






const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext)
    
  return (
    <div>
    
        <Link className="menu-link" to="/cart" >
        
        <span className="numerito">{cantidadEnCarrito()}</span>
        
        </Link>
        
    </div>
  )

}

export default CartWidget