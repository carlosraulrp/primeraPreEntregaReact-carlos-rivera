
import "./styles.css"

import { Link } from "react-router-dom";

import Navbar from "../../navbar";
import CartWidget from "../../cartWidget";

const Header =({item}) =>{
    
    return(
        <>
        <div className="barraHeader">
            <Link to="/"><img src="https://i.pinimg.com/564x/a5/3a/3d/a53a3dad439a4bd64533d4a43e69eeba.jpg" alt="barril" /></Link>
            <CartWidget/>
            
            
        </div>
        <Navbar/> 

        
        
        
        </>
        
    )
}

export {Header};