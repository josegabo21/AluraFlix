import React from "react";
import "./header.css";

export const Header = () => {
    return (
        <>
         <header>
            <div className="container flexSB">
                <nav className="flexSB">
                    <div className="logo">
                        <img className="logo" src="image 1.png" alt=""/>
                    </div>       
                </nav>
            </div>
            <button className="boton">Nuevo Video</button>
         </header>
        
        </>
    )
}
