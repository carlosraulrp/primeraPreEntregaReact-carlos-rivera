import {collection, getDocs} from 'firebase/firestore'
import { db } from '../configFirebase'



const getCategories = async () =>{
    
    const categoriesRef = collection(db, "categories")
    const snapshot = await getDocs(categoriesRef)

    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    
}

const getCategory = async (id) => {
    try {
      const collectionRef = db.collection('categories');
      const querySnapshot = await collectionRef.where('id', '==', id).get();
      const category = querySnapshot.docs[0]?.data();
  
      if (category) {
        return category;
      } else {
        throw new Error('Category not found');
      }
    } catch (error) {
      console.error('Error getting category:', error);
      throw error;
    }
  };
  
  


export {getCategories, getCategory}


