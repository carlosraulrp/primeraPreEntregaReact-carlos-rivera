import { useEffect, useState } from "react"
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from '../../services/firebase/configFirebase';
import { useNavigate, useParams, NavLink } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const categoriesRef = collection(db, "categories")
        const q = query(categoriesRef)
        
        getDocs(q).then((resp) => {
            setCategories(
              resp.docs.map((doc) => {
                
                return { ...doc.data(), id: doc.id }
                
                
              })
            )
            
          })
          

    },[])
  return (
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
  )
}

export default Navbar