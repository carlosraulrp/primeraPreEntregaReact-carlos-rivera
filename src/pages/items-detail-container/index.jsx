import { useParams } from "react-router-dom"

const ItemsDetailContainer = () =>{

    const {id} = useParams()

    return(

        <div>pagina de detalle del producto {id}</div>

    )
}

export {ItemsDetailContainer}