import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/common/itemDetail"
import { useEffect, useState } from "react"
import{ doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase/configFirebase"




const ItemsDetailContainer = () =>{

    const {id} = useParams()
    const [item, setItem] = useState()
    

    
    useEffect(() =>{
      const docRef = doc(db, "items", id)
      getDoc(docRef)
        .then((resp) =>{
            setItem(
                {
                    ...resp.data(), id: resp.id
                }
            )

        })

                
    },[id])

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