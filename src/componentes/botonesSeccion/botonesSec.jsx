import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./botonesSec.css"

export default function SeccionBotones(){


    return<>
    
        <section>
            <div className="contenedorSeccion">
            <div className="contenedorBotonesSec">
                <div className="BotonSec">
                    <FaPlus size={70}/>
                    <p>Añadir</p>
                </div>
                <div className="BotonSec">
                    <FaEdit size={70}/>
                    <p>Editar</p>
                </div>
            </div>
            </div>
        </section>
    
    </>

}