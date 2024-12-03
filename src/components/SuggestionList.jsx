import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

function SuggestionList(props) {
  const { type } = props;
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movies-api14.p.rapidapi.com/" + type,
      headers: {
        "x-rapidapi-key": "61f910990emsheab699c3a1f219fp1eb76fjsnc127bc09da8f",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    axios.request(options).then((response) => {
      setSuggestedMovies(response.data.movies);
    });
  }, []);
  return (
    <Container>
      {suggestedMovies.map((item) => (
        <Movie movie={item} key={item._id} />
      ))}
    </Container>
  );
}

export default SuggestionList;
