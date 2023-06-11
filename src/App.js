import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Home, ItemListContainer} from './pages';
import { Header } from './components/layouts/header/Header';










function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path = "/" element = {<ItemListContainer/>} />
        <Route path = "/category/:id" element = {<ItemListContainer/>} />
        
        
      </Routes>


      
      
      
      
    </BrowserRouter>
    
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
