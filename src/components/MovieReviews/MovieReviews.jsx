import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import api from "service/tmdbApi";
import Loader from "components/Loader/Loader";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await api.fetchReviewsByMovieId(movieId);
        if (results.length > 0) setReviews(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(({ content, author, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !reviews.length && (
        <p>No reviews for this movie can be found in our database...</p>
      )}
    </>
  );
};

export default MovieReviews;
