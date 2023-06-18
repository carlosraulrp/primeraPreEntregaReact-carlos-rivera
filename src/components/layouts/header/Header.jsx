import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

import { Link } from "react-router-dom";

const Header =() =>{
    return(
        <>
        <div className="barraHeader">
            <Link to="/"><img src="https://i.pinimg.com/564x/a5/3a/3d/a53a3dad439a4bd64533d4a43e69eeba.jpg" alt="barril" /></Link>
            <Link to="/cart" ><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>0</Link> 
        </div>
        
        </>
        
    )
}

export {Header};