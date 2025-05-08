import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieSimilar from "../../../../components/movie-similar";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

type IParams = {
  params: Promise<{ id: string }>
};

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const Movie = async ({ params }: IParams) => {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading similar movies...</h2>}>
        <MovieSimilar id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
};

export default Movie;