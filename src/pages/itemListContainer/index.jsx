import './styles.css'
import { useEffect, useState } from "react"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { getItems } from "../../services"
import { ItemsList } from "../../components/common/itemsList/ItemList";

const ItemListContainer =() =>{

    const {categoId} = useParams()
    const navigate = useNavigate()
    
    
    const [items, setItems] = useState([])
    

    useEffect(() =>{
        getItems(categoId).then((data) =>{
            setItems(data);
        })
        
    },[categoId])



    

    return (
      <div className="contenedor-padre">
       
        <div className="caja-list-container">
            <ItemsList items={items.map(item =>{
                return(
                    {
                        ...item,
                        onItemClicked: () => navigate(`/items-detail/${item.id}`),
                        textButton: "Ver detalle"
                    }
                )
            })}
            />

            
            
        </div>                   
        </div>
      
    );
}

export {ItemListContainer}