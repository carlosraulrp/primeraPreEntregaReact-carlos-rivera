import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Contacto, Home, OtrosProductos } from './pages';










function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path = "/" element = {<Home/>} />
        <Route path = "/otros" element = {<OtrosProductos/>} />
        <Route path = "/contactenos" element = {<Contacto/>} />
        
      </Routes>


      
      
      
      
    </BrowserRouter>
    
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
