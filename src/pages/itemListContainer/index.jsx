import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getItems } from "../../services"
import {Card, Button, Container} from 'react-bootstrap';
import { ItemsList } from "../../components/common/navbar/itemsList/ItemList";

const ItemListContainer =() =>{

    const {id} = useParams()
    const navigate = useNavigate()
    
    const [items, setItems] = useState([])

    useEffect(() =>{
        getItems().then((data) =>{
            setItems(data);
        })

    }, [])

    return (
      <Container>
       <ItemsList items={items}/>
      </Container>
    );
}

export {ItemListContainer}