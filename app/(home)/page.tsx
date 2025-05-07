import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { MOVIES_URL } from "../constant";

export const metadata: Metadata = {
  title: "Home",
}

async function getMovies() {
  const repsonse = await fetch(MOVIES_URL);
  const data = await repsonse.json();
  return data;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) =>
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      )}
    </div>
  );
};