import { Link } from 'react-router-dom';
import style from './Estilo.module.css';

export function GrillaPeli ({grilla}){
    const imagenURL = "https://image.tmdb.org/t/p/w300" + grilla.poster_path;
    
    return(<div className={style.grilla}>

             <li>{grilla.title}</li>
             <Link to={"/Peliculas/"}>
             <img src={imagenURL} />
             </Link>
        </div>
            ) 
}