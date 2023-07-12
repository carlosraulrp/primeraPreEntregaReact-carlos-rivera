import {Card, Button} from 'react-bootstrap';
import "./styles.css"



export const Item = ({id, name, category, price, description, img, onItemClicked, textButton}) =>{
    

    return(
    
        <Card style={{ width: "18rem" }} key={name}>
        <Card.Img variant="top" src= {img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Some quick example text to build on the card title and make up
            the bulk of the card's content.</p>
            <div className="item-price">
            ${price}
            </div>
          </Card.Text>
          <div className="item-buttom">
            <Button variant="secondary" onClick={onItemClicked}>{textButton}</Button>
          </div>
          
        </Card.Body>
      </Card>
        
    
    )
} 