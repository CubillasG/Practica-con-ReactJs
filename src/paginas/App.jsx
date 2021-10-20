import { Cartelera } from '../Componentes/Cartelera';
import { Headers } from '../Componentes/Headers';
// import style from './Componentes/Estilo.module.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { DetalleDeLasPelis } from './DetalleDeLasPelis';
import { LandingPage } from './LandingPage';


export function App() {
  return ( <Router>
  <div className='container'>
    <div className='row'>
         <header>
             <Link to="/"> <Headers /></Link>
              <nav>
          <ul>
            
            <li>
              <Link to="/Peliculas">Peliculas</Link>
            </li>
            
          </ul>
        </nav>
        </header> 
         
         <main>
            
         <Switch>
           <Route path="/Peliculas">
             <DetalleDeLasPelis />
           </Route>
           
           <Route path="/">
           <LandingPage />
           </Route>
           
         </Switch>
 
   
             </main> 
             
          
       
             </div>
         </div>
         </Router>
   );
 }
             
             
            
       


