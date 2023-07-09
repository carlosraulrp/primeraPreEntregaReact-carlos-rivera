import { useEffect, useState } from "react"
import { getCategories } from "../../services"
import { useNavigate, useParams, NavLink } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((data) =>{
            setCategories(data);
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