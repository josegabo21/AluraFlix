import React from "react";
import "./Home.css";

export const Home= () => {
    return (
    <>

    <header>
            <div className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                    <a href="./Home"><img className="logo" src="image 1.png" alt=""/></a>
                    </div>       
                </nav>
            </div>
           <a href="./NuevoVideo"><button className="boton">Nuevo Video</button></a> 
    </header>


    <body>      
        <section>
        <div className="contenido_inicio">
            <img className="imagen_principal" src="./imagenes/1669559000581 1.png" alt=""/>
            <h1>Front-End</h1>

            <h2>Challenge React</h2>
            <p>Este challenge es una forma de aprendzaje. Es un mecanismo <br></br>donde podrás comprometerte en la resolución de un problema <br></br>para poder poder aplicar todos los conocimientos adquiridos <br></br>en la formacion React.</p>

            <img className="imagen_player" src="./imagenes/player.png" alt=""/>
        </div>
       </section>
       
    </body>
    </>
    
    )
}
