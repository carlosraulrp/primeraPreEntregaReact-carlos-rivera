import { Image } from "react-bootstrap"
import "./styles.css"
const ItemDetail =({id, name, tipo, price, img, description }) =>{

    return(
        <div className="stylePadre-itemDetail">
            <div className="imgItemDetail">
                
                <img src={img} alt="" />
            </div>
            <div className="descItemDetail">
            <h2>{name}</h2>
                {description}
                
            </div> 
        </div>
    )

}

export {ItemDetail}