import './Pagina2.js';
import { BrowserRouter as Router } from "react-router-dom";
import { NuevoVideo } from './Formulario/Nuevo video/NuevoVideo.js';

function Pagina2() {
    return (
        <>
        <Router>
            <NuevoVideo />
        </Router>
        </>
    )
}

export default Pagina2;