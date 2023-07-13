import './styles.css'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ItemsList } from "../../components/common/itemsList/ItemList";
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from '../../services/firebase/configFirebase';

const ItemListContainer =() =>{

     const categoId = useParams().categoId
    const navigate = useNavigate()
    
    
    const [items, setItems] = useState([])
    
    

    useEffect(() => {
        
          const itemsRef = collection(db, "items")
          const q = query(itemsRef) //ayuda aca ya que no puedo filtrar por categoria
         
         
      
          getDocs(q).then((resp) => {
            setItems(
              resp.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
              })
            )
          })
        
      }, [categoId])
      



    

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