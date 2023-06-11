import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getItems } from "../../services"
import {Card, Button, Container} from 'react-bootstrap';

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
        {items.map((item) => {

            return(
          <Card style={{ width: "18rem" }} key={item.name}>
            <Card.Img variant="top" src= {item.img}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <p>Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
                <div className="item-price">
                ${item.price}
                </div>
              </Card.Text>
              <div className="item-buttom">
              <Button variant="primary">+Agregar al carrito</Button>
              <Button variant="secondary" onClick={() => navigate(`/detail/${item.id}`)}>Ver producto</Button>
              </div>
              
            </Card.Body>
          </Card>
        )})}
      </Container>
    );
}

export {ItemListContainer}