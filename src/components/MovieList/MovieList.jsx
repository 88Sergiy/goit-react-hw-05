import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/MovieItem';

function MovieList({ Movies }) {
    return (
        <ul className="flex gap-5 flex-wrap bg-violet-100 py-8 px-6 rounded-xl">
            {Movies.map(movie => (
                <li
                    key={movie.id}
                    className="flex auto basis-full sm:basis-1/3 lg:basis-1/4
                xl:basis-1/5 2x1:basis-1/6 bg-white rouded-lg"
                >
                    <MovieItem movie={movie} />
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array,
};
export default MovieList;