import "./nav.css"
import { Link } from 'react-router-dom'

export default function SidebarNav(){


    return<>
    
        <aside>
            <nav>
                <div className="contenedorImagenAside">
                    <h1>EEST Nº 2 Admin</h1>
                    <img src="/logo_escuela.png" alt="imagen aside, logo de la escuela" />
                </div>
                <div className="contenedorBotonesAside">
                    <ul>
                        <Link to="/"><li>Inicio</li></Link>
                        <Link to="/anadir"><li>Añadir</li></Link>
                        <Link to="/editar"><li>Editar</li></Link>
                    </ul>
                </div>
            </nav>
        </aside>
    
    
    </>

}