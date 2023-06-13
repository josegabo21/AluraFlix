import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header }  from './componentes/Header/header';
import { Home } from './Home/Home';
import { NuevoVideo } from './Formulario/Nuevo video/NuevoVideo';
import { NuevaCategoria } from './Formulario/Nueva Categoria/NuevaCategoria';



function App() {
  return (

  <div className='app'>
  <Router> 
    <Routes>
       <Route path='Home' element={<Home />} ></Route>
      <Route path='nuevoVideo' element={<NuevoVideo />} ></Route>
      <Route path='NuevaCategoria' element={<NuevaCategoria />} ></Route>
    </Routes>
    </Router>
  </div>
    
  
  )
}

export default App;
