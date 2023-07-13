import {Card, Button} from 'react-bootstrap';
import "./styles.css"



export const Item = ({id, name, category, price, description, img, onItemClicked, textButton}) =>{
    

    return(
    
        <Card style={{ width: "18rem" }} key={name}>
        <Card.Img variant="top" src= {img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Los mejores en {category}</p>
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