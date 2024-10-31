
import { useEffect, useState } from "react"
import "./anadir.css"

export default function Anadir(){

    const [fecha, setFecha] = useState()

    useEffect(() => {

        setFecha(Date)

    },[])


    return<>
    
        <div className="contenedorAnadir">
            <div className="anadir">
                <div className="anadirTitulo">
                    <h1>Añadir archivo</h1>
                </div>
                <div className="anadirInputs">
                    <form action="" method="post">

                        <label htmlFor="anadirInput0">Ingresar Nombre</label>
                        <br />
                        <input type="text" name="" id="anadirInput0" />
                        <br />
                        <label htmlFor="anadirInput1">Ingresar descripcion</label>
                        <br />
                        <textarea placeholder="max. 250 caracteres" maxlength="250" rows="5" cols="40" name="" id="anadirInput1"></textarea>
                        <br />
                        <label htmlFor="anaidrInput2">Fecha</label>
                        <br />
                        <input type="date" name="" id="anaidrInput2" />
                        <br />
                        <label htmlFor="anadirInput3">Subir archivo</label>
                        <br />
                        <input type="file" name="" id="anadirInput3" />
                        <br />

                        <button type="submit">Subir</button>

                    </form>
                </div>
            </div>
        </div>
    </>

}