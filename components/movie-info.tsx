import Link from "next/link";
import styles from "../styles/movie-info.module.css"
import { MOVIES_URL } from "../app/constant";
import MovieCredits from "./movie-credits";
import { Suspense } from "react";

export const getMovie = async (id: string) => {
  const response = await fetch(`${MOVIES_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Link href={movie.homepage} target={"_blank"}>Homepage &rarr;</Link>
        <Suspense fallback={<h2>Loading Credits...</h2>}>
          <MovieCredits id={id} />
        </Suspense>
      </div>
    </div>
  );
}

export default MovieInfo;