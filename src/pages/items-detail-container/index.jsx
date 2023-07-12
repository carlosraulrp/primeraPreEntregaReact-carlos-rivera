import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/common/itemDetail"
import { useEffect, useState } from "react"
import { getItems } from "../../services/firebase/items"


const ItemsDetailContainer = () =>{

    const {id} = useParams()
    const [item, setItem] = useState()

    
    useEffect(() =>{
        getItems(id).then((data) =>{
            setItem(data);
        })
        
    },[])

    if (!item) return <div>Cargando...</div>

    return(

        <div>
             <ItemDetail 
                id={item.id} 
                name={item.name}
                description ={item.description} 
                img={item.img}
                category={item.category} 
                price = {item.price} 
                
                
            />
        </div>

    )
}

export {ItemsDetailContainer}