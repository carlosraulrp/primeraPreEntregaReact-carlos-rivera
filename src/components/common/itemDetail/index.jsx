import { Image } from "react-bootstrap"

const ItemDetail =({id, name, tipo, price, img }) =>{

    return(
        <div>
            <div className="nameItemDetail">
                {name}
            </div>
            <div className="imgItemDetail">
                <img src={img} alt="" />
            </div> 
        </div>
    )

}

export {ItemDetail}