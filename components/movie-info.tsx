import Link from "next/link";
import styles from "../styles/movie-info.module.css"
import { MOVIES_URL } from "../app/constant";

export const getMovie = async (id: string) => {
  const response = await fetch(`${MOVIES_URL}/${id}`);
  const data = await response.json();
  return data;
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
      </div>
    </div>
  );
}

export default MovieInfo;