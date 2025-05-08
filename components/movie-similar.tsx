import Link from "next/link";
import { MOVIES_URL } from "../app/constant";
import styles from "../styles/movie-similar.module.css";

export const getSimilars = async (id: string) => {
  const response = await fetch(`${MOVIES_URL}/${id}/similar`);
  return response.json();
}

const MovieSimilar = async ({ id }: { id: string }) => {
  const similars = await getSimilars(id);
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Similar Movies</h2>
      <div className={styles.wrapper}>
        {similars.slice(0, 5).map((similar) => (
          <Link href={`/movies/${similar.id}`}>
            <div className={styles.container} key={similar.id}>
              <img src={similar.poster_path} className={styles.poster} />
              <h2 className={styles.movieTitle}>{similar.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>

  )
};

export default MovieSimilar;