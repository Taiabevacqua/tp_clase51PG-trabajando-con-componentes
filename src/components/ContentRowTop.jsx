import { ContentRowMovies } from "./ContentRowMovies"
import { GenresInDb } from "./GenresInDb"
import { LastMovieInDb } from "./LastMovieInDb"

export const ContentRowTop = () => {
	const genres = [
		"Acción",
		"Animación",
		"Aventura",
		"Ciencia Ficción",
		"Comedia",
		"Documental",
		"Drama",
		"Fantasía",
		"Infantiles",
		"Musical",
	];
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>


			<ContentRowMovies/>


			<div className="row">

				<LastMovieInDb/>

				<GenresInDb genres={genres} title={'Géneros en la Base de Datos'}/>
				
			</div>
		</div>
	)
}
