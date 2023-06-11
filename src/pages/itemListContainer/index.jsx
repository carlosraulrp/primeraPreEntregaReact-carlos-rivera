import { useEffect, useState } from "react"
import { useParams, useNavigate, NavLink } from "react-router-dom"
import { getCategories, getItems } from "../../services"
import {Card, Button, Container} from 'react-bootstrap';
import { ItemsList } from "../../components/common/navbar/itemsList/ItemList";

const ItemListContainer =() =>{

    const {categoId} = useParams()
    const navigate = useNavigate()
    
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getItems().then((data) =>{
            setItems(data);
        })

        getCategories().then((data) =>{
            setCategories(data);
        })

    }, [])

    return (
      <Container>
        
   
       <ItemsList items={items}/>
      </Container>
    );
}

export {ItemListContainer}