import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

const Header =() =>{
    return(
        <div className="barraHeader">
            <img src="https://i.pinimg.com/564x/a5/3a/3d/a53a3dad439a4bd64533d4a43e69eeba.jpg" alt="barril" />
            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>0</a>
        </div>
    )
}

export {Header};