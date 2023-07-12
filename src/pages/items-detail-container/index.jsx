import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/common/itemDetail"
import { useEffect, useState } from "react"
import { getItems} from "../../services/firebase/items"


const ItemsDetailContainer = () =>{

    const {id, categoId} = useParams()
    const [item, setItem] = useState()
    

    
    useEffect(() =>{
        getItems().then((data) =>{
            setItem(data);
        })

                
    },[])

    if (item){
        return(

            <div>
                
                 <ItemDetail 
                    id={item.id} 
                    name={item.name}
                    description ={item.description} 
                    img = {item.img}
                    category={item.category} 
                    price = {item.price} 
                    
                    
                />
            </div>
    
        )
    }
    
    
}

export {ItemsDetailContainer}