import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./botonesSec.css"
import { Link } from 'react-router-dom'

export default function SeccionBotones(){


    return<>
    
        <section>
            <div className="contenedorSeccion">
            <div className="contenedorBotonesSec">
                <Link to="/anadir">
                <div className="BotonSec">
                    <FaPlus size={70}/>
                    <p>Añadir</p>
                </div>
                </Link>
                <Link to="/editar">
                <div className="BotonSec">
                    <FaEdit size={70}/>
                    <p>Editar</p>
                </div>
                </Link>
            </div>
            </div>
        </section>
    
    </>

}