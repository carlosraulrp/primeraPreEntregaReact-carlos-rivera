import { Item } from "../../item/Item"
import "./styles.css"


const ItemsList = ({items}) =>{

    return(
        items.map((item) => (
            <Item 
            name={item.name} 
            id={item.id} 
            tipo={item.tipo} 
            img={item.img} 
            price={item.price}
            description={item.description} 
            onItemClicked={item.onItemClicked}
            textButton={item.textButton}
            
            />
        ))
    )
}

export {ItemsList}