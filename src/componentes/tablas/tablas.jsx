import "./tablas.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Tabla({nombre, descripcion, fecha, src}){


    const funcionEditar = () =>{

        //futuro codigo...

    }


    const funcionEliminar = () =>{

        //futuro codigo...

    }

    

    return<>

        <div className="contenedorTabla">
            <div className="tablaTitulo">
                <h1>{nombre}</h1>
            </div>
            <div className="tablaCuerpo">
                <div className="tablaDesc">
                    {descripcion}
                </div>
                <div className="tablaFecha">
                    {fecha}
                </div>
                <div className="tablaAside">
                    <div className="tablaBoton">
                        <button onClick={funcionEditar}><FaEdit size={35} /></button>
                    </div>
                    <div className="tablaBoton">
                        <button onClick={funcionEliminar}><MdDelete size={35} /></button>
                    </div>    
                </div>
            </div>
        </div>
    
    </>

}