import listita from './Movie.json';
import style from './Detalles.module.css'


export function DetalleDeLasPelis (){
    const imagenURL = "https://image.tmdb.org/t/p/w500" + listita.poster_path;
    return(
        <div className={style.detalleMovie}>
            <img src={imagenURL} alt={listita.name} className={` ${style.col} ${style.imagen}`} />
            <div className={`${style.col} ${style.texto}`}> 
            <p><strong>Titulo:</strong>  {listita.original_title}</p>
         
         
                <p><strong>Genero:</strong>{(' ')}
                {
                    listita.genres.map(genero =>(genero.name)).join(', ')
                }
                </p>
            
          
                <p><strong>Descripcion:</strong> {listita.overview}</p>
            </div>
        </div>
    )
}