import {categories} from '../../tmp/data'


const getCategories = async () =>{

    return new Promise((resolve, reject) => {
        resolve(categories)
    })
}

const getCategory =  async (id) =>{

    return new Promise((resolve, reject) => {
        resolve(categories.find ((category) => category.id === id))
    })
}

export {getCategories, getCategory}