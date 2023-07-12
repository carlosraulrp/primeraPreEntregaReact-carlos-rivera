import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {ItemListContainer, ItemsDetailContainer} from './pages';
import { Header } from './components/layouts/header/Header';
import {CartProvider } from './context/cartContext';
import Carrito from './components/cart';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTF_0vlZy53_wBty-6ek5yb_Z9DygWenM",
  authDomain: "licoreria-868d3.firebaseapp.com",
  projectId: "licoreria-868d3",
  storageBucket: "licoreria-868d3.appspot.com",
  messagingSenderId: "542854882423",
  appId: "1:542854882423:web:a375ae71f980298cd8d272"
};

// Initialize Firebase
initializeApp(firebaseConfig);










function App() {


  return (

    <div>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            
            <Route path = "/" element = {<ItemListContainer/>} />
            <Route path = "/category/:categoId" element = {<ItemListContainer/>} />
            <Route path = "/items-detail/:id" element = {<ItemsDetailContainer/>} />
            <Route path = "/cart" element = {<Carrito/>}/>
            
            
          </Routes>

                
        </BrowserRouter>

      </CartProvider>
      

      </div>
    
    
    
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
