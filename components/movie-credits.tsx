import { MOVIES_URL } from "../app/constant";
import styles from "../styles/movie-credits.module.css"

export const getCredits = async (id: string) => {
  const response = await fetch(`${MOVIES_URL}/${id}/credits`);
  return response.json();
}

const MovieCredits = async ({ id }: { id: string }) => {
  const credits = await getCredits(id);

  return (
    <div className={styles.wrapper}>
      {credits.slice(0, 5).map((credit) => (
        <div key={credit.id} className={styles.container}>
          <img src={credit.profile_path} className={styles.credits} />
          <h2>{credit.original_name} ⭐️{credit.popularity.toFixed(1)}</h2>
        </div>
      ))
      }
    </div>
  );
}

export default MovieCredits;