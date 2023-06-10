import storeItems from "../../data/products.json"
import { Item } from "../item/Item"
import "./style.css" 
export const ItemList = () =>{

    return(
        <div className="itemList-container">
              {
                storeItems.map(product =>{
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
          
        
    )
}
