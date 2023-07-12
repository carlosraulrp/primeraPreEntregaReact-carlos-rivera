import {collection, getDocs, getDoc, doc, getFirestore, query, where} from 'firebase/firestore'
import { db } from '../configFirebase'




const getItems = async(categoId) =>{
    
    const itemsRef = collection(db, "items")
    let q
    if(categoId){
        q = query(itemsRef, where("category", "==", categoId))
        
    }
    try{
        const snapshot = await getDocs(q || itemsRef)
        if (snapshot.size > 0 ){
            return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        }
        return []

    }catch (err){
        return err
    }finally{
        console.log("finally")
    }



}

const getItem = async(id) =>{
    const db = getFirestore()
    const itemRef = doc(db, "items", id )

    try{
        const snapshot = await getDoc(itemRef)
        if(snapshot.exists()){
            return {id: snapshot.id, ...snapshot.data()}
        }

    }catch(err){
        return err
    }finally{
        console.log("finally")
    }

    return null
    

    

    


}

/* const getItem =  async (id) =>{

    return new Promise((resolve, reject) => {
        resolve(items.find((item) => item.id === id))
    })
} */

export {getItems, getItem}