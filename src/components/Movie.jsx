import styled from "styled-components";

const Poster = styled.img`
  width: 13%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

function Movie(props) {
  const { movie } = props;

  return <Poster src={movie.poster_path} />;
}

export default Movie;
