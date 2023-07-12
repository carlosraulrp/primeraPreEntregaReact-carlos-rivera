
import "./styles.css"
import ItemCount from "../itemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/cartContext"

const ItemDetail =({id, name, category, price, img, description }) =>{

    const { agregarCarrito} = useContext(CartContext)
    

    const [cantidad, setCantidad] = useState(1)
    const handleRestar =() =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const item = {id, name, category, price, img, description}
    const handleSumar =() =>{
        setCantidad(cantidad + 1)
    }



   

    return(
        <div className="stylePadre-itemDetail">
            <div className="imgItemDetail">
                
                <img src={img} alt="" />
            </div>
            <div className="descItemDetail">
            <h2>{name}</h2>
                <p>{description}</p> 
                <div>
                    <h3>${price}</h3>
                    <ItemCount cantidad = {cantidad} handleRestar={handleRestar} handleSumar={handleSumar} agregarCarrito ={() => {agregarCarrito(item, cantidad)}}/> 
                </div>
            </div>
            
        </div>
    )

}

export {ItemDetail}