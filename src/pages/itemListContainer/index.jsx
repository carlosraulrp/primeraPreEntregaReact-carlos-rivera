import './styles.css'
import { useEffect, useState } from "react"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { getCategories, getItems } from "../../services"
import { ItemsList } from "../../components/common/itemsList/ItemList";

const ItemListContainer =() =>{

    const {categoId} = useParams()
    const navigate = useNavigate()
    
    
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getItems(categoId).then((data) =>{
            setItems(data);
        })
        
    },[categoId])



    useEffect(()=>{
        getCategories().then((data) =>{
            setCategories(data);
        })

    },[])

    return (
      <div className="contenedor-padre">
        <div className="caja-nav">
            <nav>
                <ul>
                    {categories.map((category)=>(
                        <li>
                            <NavLink to={`/category/${category.id}`}>
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
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