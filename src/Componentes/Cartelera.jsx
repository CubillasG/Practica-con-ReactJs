import { GrillaPeli } from './GrillaPeli';
import Lista from './ListadoPelis';
import style from './Estilo.module.css';

export function Cartelera (){

    return(
       
            
    
            <ul>
                {
                    Lista.map(listado =>(
                       <GrillaPeli key={listado.id} grilla={listado}/>
                    ))
                }
                
            </ul>
   
           

    )
}