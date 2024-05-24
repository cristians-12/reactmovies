/* eslint-disable react/prop-types */
export const RenderizarPelis = ({pelis}) => {
  return (
    <ul>
      <h1>Resultados:</h1>
      {pelis.map((pelicula) => (
        <li key={pelicula.imdbID} className="flex items-center flex-col">
          <h3>{pelicula.Title}</h3>
          <p>{pelicula.Year}</p>
          <img src={pelicula.Poster} alt="" />
        </li>
      ))}
    </ul>
  );
};

export const NoPelis = ()=>{
    return(
        <h1>No hay resultados</h1>
    )
}

export const CondiPelis = ({hayPelis, pelis})=>{
  return(
    hayPelis ? <RenderizarPelis pelis={pelis} /> : <NoPelis />
  )
}
