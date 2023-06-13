import React from "react";
import "./NuevaCategoria.css";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export const NuevaCategoria= () => {
const {register, reset, formState: { errors }, handleSubmit} = useForm();

const onSubmit = (data) => {
    console.log(data);
}  

const mostrarAlerta = () => {
    reset();
    swal({
        title:"Categoria Añadida",
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
                        <a href="./Home"><img className="logo" src="image 1.png" alt=""/></a>
                    </div>       
                </nav>
            </div>
        </header>

        <h1>Nueva Categoría</h1>

<form onSubmit={handleSubmit(onSubmit)}>

    <label>Nombre</label>
    <div>
        <input className="casillas" type="text" {...register('Titulo', {required: true, maxLength: 20})}/>
        {errors.Titulo?.type === 'required' && <p className="aviso">El campo es requerido</p>}
        {errors.Titulo?.type === 'maxLength' && <p className="aviso">El campo debe tener menos de 20 caracteres</p>}
    </div>
    
    <label>Descripcion</label>
    <div>
        
    <textarea className="casillas" size="40" maxLength="40" {...register('Descripcion', {required: true})}/>
     {errors.Descripcion?.type === 'required' && <p className="aviso">El campo es requerido</p>}
    </div>

    <label>Color</label>
     <div>               
     <input className="casillas_color" type="color" {...register('Linkdelvideo', {required: true})}/>
     {errors.Linkdelvideo?.type === 'required' && <p className="aviso">El campo es requerido</p>}
    </div>

    <label>Codigo de seguridad</label>
    <div>                
        <input className="casillas" type="text" {...register('Linkdelaimagen', {required: true})}/>
        {errors.Linkdelaimagen?.type === 'required' && <p className="aviso">El campo es requerido</p>}
     </div> 
    
     <input onClick={handleSubmit(mostrarAlerta)} className="boton1"  type="button" value="Guardar"></input>

            
    <input onSubmit={handleSubmit(onSubmit)} className="boton2" type="submit" value="Limpiar"></input>

</form>

</>




)

}


