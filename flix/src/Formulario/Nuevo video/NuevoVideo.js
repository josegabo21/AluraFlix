import React from "react";
import "./NuevoVideo.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export const NuevoVideo= () => {
const {register, reset, formState: { errors }, handleSubmit} = useForm();

const onSubmit = (data) => {
    console.log(data);
    reset();
}

const mostrarAlerta = () => {
    reset();
    swal({
        title:"Video Añadido",
        icon:"success",
        button:"Aceptar",

});
}

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
        </header>

        <h1>Nuevo Video</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Titulo</label>
            <div>
                <input className="casillas" type="text" {...register('Titulo', {required: true, maxLength: 20})}/>
                {errors.Titulo?.type === 'required' && <p className="aviso">El campo es requerido</p>}
                {errors.Titulo?.type === 'maxLength' && <p className="aviso">El campo debe tener menos de 20 caracteres</p>}
            </div>
            
            <label>Link del video</label>
            <div>
                
                <input className="casillas" type="text" {...register('Linkdelvideo', {required: true})}/>
                {errors.Linkdelvideo?.type === 'required' && <p className="aviso">El campo es requerido</p>}
            </div>

            <label>Link de la imagen</label>
            <div>                
                <input className="casillas" type="text" {...register('Linkdelaimagen', {required: true})}/>
                {errors.Linkdelaimagen?.type === 'required' && <p className="aviso">El campo es requerido</p>}
             </div> 
            
            <label>Categoria</label>
            <div>               
                <select {...register('Categoria', {required: true})}>
                <option>Seleccione una Categoria</option>
                <option value="Front End"> Front End</option>
                
                </select>
            </div>

            <label>Descripción</label>
            <div>               
                <textarea className="casillas" size="40" maxLength="40" {...register('Descripcion', {required: true})}/>
                {errors.Descripcion?.type === 'required' && <p className="aviso">El campo es requerido</p>}
            </div>

            <label>Codigo de seguridad</label>
            <div>
               <input className="casillas" type="text" {...register('Codigodeseguridad', {required: true})}/>
                {errors.Codigodeseguridad?.type === 'required' && <p className="aviso">El campo es requerido</p>}
            </div>
            
            <input onClick={handleSubmit(mostrarAlerta)} className="boton1"  type="button" value="Guardar"></input>

            
            <input onSubmit={handleSubmit(onSubmit)} className="boton2" type="submit" value="Limpiar"></input>


            <a href="./NuevaCategoria"><input className="boton3" type="button" value="Nueva Categoria"></input></a>
        </form>
        
        
    </>
    
    )
}
