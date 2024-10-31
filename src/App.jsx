import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarNav from "./componentes/navbar/navbar"
import SeccionBotones from "./componentes/botonesSeccion/botonesSec"
import "./app.css"
import Login from './pages/login/login';
import Anadir from './pages/anadir/anadir';
import Editar from './pages/editar/editar';

function App() {

  return (
    <>

      <Router>


        <Routes>
          <Route path='/' element={
            <div className="cuerpo"> 
              <SidebarNav /> 
              <SeccionBotones />
            </div>} 
          />
          <Route path='/login' element={<Login />}/>
          <Route path='/anadir' element={
            <div className="cuerpo"> 
              <SidebarNav /> 
              <Anadir />  
            </div>} 
          />
          <Route path='/editar' element={
            <div className="cuerpo"> 
              <SidebarNav /> 
              <Editar />  
            </div>} 
          />
        </Routes>
      </Router>


    </>
  )
}

export default App
