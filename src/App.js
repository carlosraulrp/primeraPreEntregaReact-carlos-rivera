import { library } from "@fortawesome/fontawesome-svg-core";
import NoTransitionExample from "./components/layouts/carousel";
import {BasicExample} from "./components/layouts/navbar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./components/common/header/Header";




function App() {
  return (
    <div className="App">
      <Header />
      <BasicExample/>
      <NoTransitionExample/>
      
      
      
    </div>
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
