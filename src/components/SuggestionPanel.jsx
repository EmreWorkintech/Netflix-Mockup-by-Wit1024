import styled from "styled-components";
import SuggestionList from "./SuggestionList";

const Container = styled.div`
  margin: 1rem;
  color: lightgray;
`;

const VerticalScroll = styled.div`
  width: 100%;
  overflow: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function SuggestionPanel(props) {
  const { title, type } = props;
  return (
    <Container>
      <Title>
        <h3>{title}</h3>
        <p>- - - - - -</p>
      </Title>
      <VerticalScroll>
        <SuggestionList type={type} />
      </VerticalScroll>
    </Container>
  );
}

export default SuggestionPanel;
