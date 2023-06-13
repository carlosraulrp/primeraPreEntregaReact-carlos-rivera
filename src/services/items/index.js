import {items} from "../../tmp/data"




const getItems = async (categoId) =>{

    return new Promise((resolve, reject) => {
         
            resolve(categoId ?items.filter((item)=> item.tipo === categoId): items)
         
})}

const getItem =  async (id) =>{

    return new Promise((resolve, reject) => {
        resolve(items.find((item) => item.id === id))
    })
}

export {getItems, getItem}