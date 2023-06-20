import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/common/itemDetail"
import { useEffect, useState } from "react"
import { getItem } from "../../services"

const ItemsDetailContainer = () =>{

    const {id} = useParams()
    const [item, setItem] = useState()

    
    useEffect(() =>{
        getItem(id).then((data) =>{
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
                tipo={item.tipo} 
                price = {item.price} 
                
                
            />
        </div>

    )
}

export {ItemsDetailContainer}