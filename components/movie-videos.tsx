import { MOVIES_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

const getVideos = async (id: string) => {
  const response = await fetch(`${MOVIES_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.key}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  )
};

export default MovieVideos;